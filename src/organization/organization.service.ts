/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrganizationService {

  constructor(private prisma:PrismaService){}
  async create(dto: CreateOrganizationDto) {
    const newOrganisation= await this.prisma.organization.create({
      data: {
        name: dto.name,
        logo: dto.logo||null,
        description: dto.description||null,
      }
    })

    return newOrganisation;
  }

  

  async findAll() {
    const organizations= await this.prisma.organization.findMany();
    return organizations;
  }


  async findOne(id: string) {
    const organization= await this.prisma.organization.findUnique({
where:{id:id}
    })
    return organization;
  }




  async update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
    const organization= await this.prisma.organization.findUnique({
      where:{id:id}
          })
          if(!organization) throw new Error(`Could not find organization`);

          await this.prisma.organization.update({
            where:{id:id},
            data: updateOrganizationDto
          })
    return {
      success: true,
      message:"Organization updated successfully"
    };
  }




  async remove(id: string) {
   const organization= await this.prisma.organization.findUnique({
      where:{id:id}
          })
          if(!organization) throw new Error(`Could not find organization`);

          await this.prisma.organization.delete({
            where:{id:id},
            
          })
    return {
      success: true,
      message:"Organization deleted successfully"
    };
  }
}
