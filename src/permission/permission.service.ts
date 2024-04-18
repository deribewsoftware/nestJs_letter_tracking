/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PermissionService {

  constructor(private prisma:PrismaService){}
  async create(createPermissionDto: CreatePermissionDto) {
    const newPermission= await this.prisma.permission.create({
      data:{
        roleId: createPermissionDto.roleId,
        action: createPermissionDto.action
      }
    })

    return newPermission;
  }

  async findAll() {
    const permissions=await this.prisma.permission.findMany();
    return permissions;
  }

  async findOne(id: string) {
    const permission=await this.prisma.permission.findUnique({where: {id: id}});
    return permission;
  }

  async update(id: string, updatePermissionDto: UpdatePermissionDto) {
    const permission=await this.prisma.permission.findUnique({where: {id: id}});
    if (!permission){
      throw new ForbiddenException("Permission not found")
    }
    await this.prisma.permission.update({
      where:{id: id},
      data:updatePermissionDto
    })
    return {
      success: true,
      message:"Permission updated successfully"
    };
  }

  async remove(id: string) {
    const permission=await this.prisma.permission.findUnique({where: {id: id}});
    if (!permission){
      throw new ForbiddenException("Permission not found")
    }
    await this.prisma.permission.delete({
      where:{id: id},
   
    })
    return {
      success: true,
      message:"Permission deleted successfully"
    };
  }
}
