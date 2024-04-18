/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete,Get, InternalServerErrorException, Patch, Post, Res, UseGuards } from '@nestjs/common';
import { RegistrationUserDto } from './dto/registration.dto';
import { AuthService } from './auth.service';
import { ActivationAccountDto } from './dto/activation.account.dto';
import { SigninAuthDto } from './dto/signin.user.dto';
import { Response } from 'express';
import { ForgotPassword } from './dto/forgot.password.dto';
import { ResetPassword } from './dto/reset.password.dto';
import { GetUser } from 'src/decorators';
import { RtGuard } from './guard/rt.guards';
import { Roles } from 'src/decorators/role.auth';
import { Role } from 'src/decorators/role.enum';
import { RolesGuard } from './guard/role.guard';




@Controller('auth')
export class AuthController {
constructor(private authService: AuthService){}

@Post()
registerUser(@Body() dto:RegistrationUserDto){
 return this.authService.createUser(dto)
}


@Post("activate")
async activateUser(@Body() dto:ActivationAccountDto,@Res() res: Response){
  try {
    const tokens =await this.authService.activationAccount(dto);

   

    res.cookie('refresh_token', tokens.refresh_token, { httpOnly: true });

    res.send({ success: true,message:"account verified successfully"});
  } catch (err: unknown) {
    throw new InternalServerErrorException(err);
  }

}




@Post('sign-in')
signIn(@Body() credentials: SigninAuthDto, @Res() res:Response) {
return this.authService.signin(credentials,res);
  
  
}



@Post('forgot-password')
forgotPassword(@Body() dto:ForgotPassword){

  return this.authService.forgotPassword(dto);

}




//reset password
@Patch("reset-password")
resetPassword(@Body() dto:ResetPassword){
  return this.authService.resetPassword(dto);
}




//logout user
@UseGuards(RtGuard)
@Post('logout')
  logout(@Res() response: Response) {
   return this.authService.logout(response);
    
  }



@UseGuards(RtGuard)
@Get("profile")
getUser(@GetUser() user:any){
  return this.authService.myProfile(user['id']);

}



//delete user
@Roles(Role.ADMIN)
@UseGuards(RtGuard,RolesGuard)
@Delete("delete-user")
deleteUser(@GetUser() userId:string){
  return this.authService.deleteAccount(userId['id']);
}




}
