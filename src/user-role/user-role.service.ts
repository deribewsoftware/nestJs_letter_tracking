/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserRoleService {
  constructor(private prisma:PrismaService){}
  async create(createUserRoleDto: CreateUserRoleDto) {
    const newRole=await this.prisma.userRole.create({
      data:{
        userId: createUserRoleDto.userId,
        roleId: createUserRoleDto.roleId
      }
    })
    return newRole;
  }

  async findAll() {
    const userRoles=await this.prisma.userRole.findMany();
    return userRoles;
  }

  async findOne(id:string) {
    const userRole=await this.prisma.userRole.findUnique({where:{id:id}})
    return userRole;
  }

  async update(id:string, updateUserRoleDto: UpdateUserRoleDto) {
    const userRole=await this.prisma.userRole.findUnique({where:{id:id}})
    if(!userRole){
      throw new ForbiddenException("userRole not found")

    }

    await this.prisma.userRole.update({where:{id:id}, 
      data:{
        userId:updateUserRoleDto.userId,
        roleId:updateUserRoleDto.roleId
      }
    })
    return {
      success:true,
      messages:"User role updated successfully"
    };
  }

  async remove(id:string) {
    const userRole=await this.prisma.userRole.findUnique({where:{id:id}})
    if(!userRole){
      throw new ForbiddenException("userRole not found")

    }

    await this.prisma.userRole.delete({where:{id:id}, 
      
    })
    return {
      success:true,
      messages:"User role deleted successfully"
    };
  }
}
