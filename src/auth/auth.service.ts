/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegistrationUserDto } from './dto/registration.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from "nodemailer"
import { TransportOptions } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { ActivationAccountDto } from './dto/activation.account.dto';
import * as bcrypt from "bcryptjs"
import { Tokens } from './types/token.types';
import { SigninAuthDto } from './dto/signin.user.dto';
import { JwtPayload } from './types/jwtPayload.types';
import { resetPasswordTemplate } from 'src/mail_templates/resetPassword.template';
import { ResetPassword } from './dto/reset.password.dto';
import { ForgotPassword } from './dto/forgot.password.dto';
import { mailerOption } from 'src/utils/account.verification';


@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private configService: ConfigService,
  ) {}

  mailTransport() {
    const transporter = nodemailer.createTransport({
      host: this.configService.get<string>('SMTP_HOST'),
      port: this.configService.get<string>('SMTP_PORT'),
      secure: true, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: this.configService.get<string>('SMTP_MAIL'),
        pass: this.configService.get<string>('SMTP_PASS'),
      },
    } as TransportOptions);
    return transporter;
  }

  async createActivationToken(email: string) {
    const activationCode = Math.floor(1000 + Math.random() * 9000).toString();
    const token = await this.jwt.signAsync(
      { email, activationCode },
      { secret: this.configService.get<string>("ACTIVATION_SECRET"), expiresIn: "5m" }
    );

    return { token, activationCode };
  }



  async createUser(dto: RegistrationUserDto): Promise<any> {
    
    try {
      const existingUser = await this.prisma.user.findFirst({
        where: { email: dto.email },
      });

      if (existingUser&&existingUser.emailVerified) {
        throw new ForbiddenException("Email is already taken");
      }

      if(dto.password!==dto.retypePassword){
        throw new ForbiddenException("password not match");
      }
    

      const transporter = this.mailTransport();
     const activationToken = await this.createActivationToken(dto.email)

      

      if(existingUser&&!existingUser.emailVerified){
        await transporter.sendMail(mailerOption(dto.email,activationToken.activationCode,activationToken.token));


      return {
        success: true,
        message: `Account not Verify! Please check your email ${dto.email} to verify and ${activationToken.activationCode}`,
        activationToken: activationToken.token,
      };
      }
      else{

        const hashedPassword = await bcrypt.hash(dto.password, 10);
       
        
            await this.prisma.user.create({
              data:{
                name:dto.full_name,
                email:dto.email,
                password:hashedPassword,
             
        
              }
            })
        await transporter.sendMail(mailerOption(dto.email, activationToken.activationCode,activationToken.token));


        return {
          success: true,
          message: `Acount Create Success! Please check your email  to verify${dto.email} and ${activationToken.activationCode}`,
          activationToken: activationToken.token,
        };
      }
     
    } catch (err) {
      console.log(err);
      throw err; // Rethrow the error to handle it elsewhere if necessary
    }
  }










// activation  Account

async activationAccount(dto:ActivationAccountDto): Promise<Tokens>{
  try{
    const newUser=await this.jwt.verify(dto.activation_token,{secret:this.configService.get<string>("ACTIVATION_SECRET")})
    if(!newUser){
      throw new ForbiddenException("token is expired");
    }

    if (newUser.activationCode!==dto.activation_code){
      throw new ForbiddenException("Invalid activation code");
      

    }
 
    const user = await this.prisma.user.findUnique({
      where:{email:newUser.email},
      include:{
        roles:true,
        permissions:{
          
         select:{
          role:{
            select:{
              action:true
            }
          }
         }
        }
      }
    })
    if(!user){
      throw new ForbiddenException("email not found"); 
    }

    





await this.prisma.user.update({
  where:{email:newUser.email},
      data:{
        emailVerified:new Date()

      }
    })


    const tokens = await this.GetToken(user.id, user.email,user.roles,user.permissions);
 
    const res = {access_token:tokens.access_token, refresh_token:tokens.refresh_token}
  
    return res;

    
  }

  catch (err) {
    throw new  ForbiddenException({success: false, message:err.message})
  }

}





















// SIGNIN USER

async signin(dto: SigninAuthDto, res: any): Promise<any> {
  try {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
      include:{
        roles:true,
        permissions:{
          
         select:{
          role:{
            select:{
              action:true
            }
          }
         }
        }
      }
    });

    if (!user)
      throw new ForbiddenException("Credentials are not valid");

    if (!user.emailVerified) {
      const activationToken = await this.createActivationToken(dto.email);
      const transporter = this.mailTransport();

      await transporter.sendMail(mailerOption(dto.email, activationToken.activationCode,activationToken.token));

      res.send( {
        success: true,
        message: `Account not verified! Please check your email ${dto.email} to verify.`,
        activationToken: activationToken.token,
      })
    }

    const isMatch = await bcrypt.compare(dto.password, user.password);

    if (!isMatch)
      throw new ForbiddenException("Credentials are not valid");

    const tokens = await this.GetToken(user.id, user.email, user.roles,user.permissions);

    res.cookie('refreshToken', tokens.refresh_token, { httpOnly: true,   sameSite: 'None',secure:true });
    res.send({ message: "Sign in successful" });

  } catch (err) {
    throw new ForbiddenException("Invalid Credentials");
  }
}


// LOGOUT

logout(response: any) {
  // Clear the refresh token cookie
   response.clearCookie('refreshToken');
   response.send({message:" You have been logged out successfully"})
}


async myProfile(userId:string){ 
  const user =await this.prisma.user.findUnique({
    where:{id:userId},
    include:{
      roles:true,
      permissions:{
        
       select:{
        role:{
          select:{
            action:true
          }
        }
       }
      }
    }
  })
  delete user.password
  
  
  return user;
}


// forgot password
async forgotPassword(dto:ForgotPassword){
  const transporter = this.mailTransport();

  try{
    const email = dto.email
    const token = await this.jwt.signAsync(
      { email },
      { secret: this.configService.get<string>("FORGOT_PASSWORD"), expiresIn: "5m" }
    );
  
    const html=resetPasswordTemplate(`http://localhost:3000/resetPassword?token=${token}`);
  
    const mailerOptions: Mail.Options = {
      from: {
        name: "Deribew Shimelis",
        address: this.configService.get<string>('SMTP_MAIL'),
      },
      to: dto.email,
      subject: "Verify Your Email",
      html:html
    };

    await transporter.sendMail(mailerOptions);

    return {
      success: true,
      message:"success send to email; and  please reset your password",
      token: token
    }

  }
  catch (err) {
    throw err;
  }


}


// reset password
async resetPassword(dto:ResetPassword){

  try{
    if(dto.password!==dto.confirmPassword){
      throw new  ForbiddenException("password is not match");
    }
const email= await this.jwt.verify(dto.token,{secret:this.configService.get<string>("FORGOT_PASSWORD")})


if(!email.email){
  throw new  ForbiddenException("token is not valid")
}

const user = await this.prisma.user.findUnique({where: {email:email.email}})

if(!user){
  throw new  ForbiddenException("email is not exist")
}

const hashedPassword=await bcrypt.hash(dto.password,10);

await this.prisma.user.update({
  where:{id:user.id},
  data:{
    password:hashedPassword
  }
})


return {
  success: true,
  message:"Your password updated successfully"
}





  }
  catch (err) {
    throw err;
  }

}




  async deleteAccount(userId: string) {
    try {
      await this.prisma.user.delete({
        where: {
          
          id: userId, 
          // email:email// Assuming 'id' is the unique identifier for a user
        },
      });
    } catch (error) {
      // Handle any errors that occur during the deletion process
      throw new ForbiddenException((`no user is found`));
    }
  }
  





  async GetToken(userId: string, email: string, roles:any[],permissions:any[]){
    const jwtPayload: JwtPayload = {
      id: userId,
      email: email,
     roles:roles,
     permissions:permissions
      
      
    };


    const [at, rt] = await Promise.all([
      this.jwt.signAsync(jwtPayload, {
        secret: this.configService.get<string>('AT_SECRET'),
        expiresIn: '1d',
      }),
      this.jwt.signAsync(jwtPayload, {
        secret: this.configService.get<string>('RT_SECRET'),
        expiresIn: '1h',
      }),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }

  

}