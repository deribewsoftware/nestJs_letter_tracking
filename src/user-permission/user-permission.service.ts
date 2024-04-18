/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserPermissionDto } from './dto/create-user-permission.dto';
import { UpdateUserPermissionDto } from './dto/update-user-permission.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserPermissionService {
  constructor(private  prisma:PrismaService){}
  async create(createUserPermissionDto: CreateUserPermissionDto) {
    const newUserPermission = await this.prisma.userPermission.create({
      data:{
        userId: createUserPermissionDto.userId,
        permissionId: createUserPermissionDto.permissionId
      }
    })
    return newUserPermission;
  }



  async findAll() {
    const userPermissions = await this.prisma.userPermission.findMany();
    return userPermissions;
  }



  async findOne(id: string) {
    const userPermission =await this.prisma.userPermission.findUnique({where: {id: id}});
    return userPermission;
  }


  async update(id: string, updateUserPermissionDto: UpdateUserPermissionDto) {
    const userPermission =await this.prisma.userPermission.findUnique({where: {id: id}});
    if(!userPermission){
      throw new ForbiddenException("User permission not found")
    }
    await this.prisma.userPermission.update({
      where: {id: id},
      data:{
        userId:updateUserPermissionDto.userId,
        permissionId: updateUserPermissionDto.permissionId
      }
    })
    return {
      success: true,
      messages:"Permission updated successfully"
    };
  }

  async remove(id: string) {
    const userPermission =await this.prisma.userPermission.findUnique({where: {id: id}});
    if(!userPermission){
      throw new ForbiddenException("User permission not found")
    }
    await this.prisma.userPermission.delete({
      where: {id: id},
    })
    return {
      success: true,
      messages:"Permission deleted successfully"
    };
  }
}
