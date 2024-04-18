/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
constructor(private prisma:PrismaService){}



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



async getAllUsers(){
  const users=await this.prisma.user.findMany();
  return users;
}

 
  update(id: string, updateUserDto: UpdateUserDto) {
    
    return `This action updates a #${id} user`;
  }

  
}
