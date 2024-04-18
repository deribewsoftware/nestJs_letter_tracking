/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepartmentService {
  constructor(private prisma:PrismaService){}
  async create(createDepartmentDto: CreateDepartmentDto,organizationId:string) {
    const newDepartment = await this.prisma.department.create({
      data: {...createDepartmentDto,organizationId:organizationId}
    })
    return newDepartment;
  }




  async findAll() {
    const departments=await this.prisma.department.findMany();
    return departments;
  }




  async findOne(id: string) {
    const department = await this.prisma.department.findUnique({where: {id: id}});
    return department;
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    const department = await this.prisma.department.findUnique({where: {id: id}});
    if(!department){
      throw new ForbiddenException("department not found")
    }
    await this.prisma.department.update({
      where: {id: id},
      data: updateDepartmentDto
    })
    return {
      success: true,
      message:"Departments updated successfully"
    }
  }

  async remove(id: string) {
    const department = await this.prisma.department.findUnique({where: {id: id}});
    if(!department){
      throw new ForbiddenException("department not found")
    }
    await this.prisma.department.delete({
      where: {id: id},
     
    })
    return {
      success: true,
      message:"Departments deleted successfully"
    }
  }
}
