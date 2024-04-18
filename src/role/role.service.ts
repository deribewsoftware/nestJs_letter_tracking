/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoleService {

  constructor(private prisma: PrismaService){}
  async create(createRoleDto: CreateRoleDto) {
    const newRole=await this.prisma.role.create({
      data:createRoleDto
    })
    return newRole;
  }




  async findAll() {
    const roleLists=await this.prisma.role.findMany();
    return roleLists;
  }

  

  async findOne(id: string) {
    const role=await this.prisma.role.findUnique({
      where: {id:id}
    });
    return role;
  }





  async update(id: string, updateRoleDto: UpdateRoleDto) {
    const role=await this.prisma.role.findUnique({where: {id:id}});
    if (!role) {
throw new ForbiddenException("Role not found")
    }
    await this.prisma.role.update({
      where: {id:id},
      data:updateRoleDto
    })
    return {
      succes: true,
      message:"Role updated successfully"
    };
  }



  async remove(id: string) {
    const role=await this.prisma.role.findUnique({where: {id:id}});
    if (!role) {
throw new ForbiddenException("Role not found")
    }
    await this.prisma.role.delete({
      where: {id:id},
     
    })
    return {
      succes: true,
      message:"Role deleted successfully"
    };
  }
}
