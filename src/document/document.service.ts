/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DocumentService {

  constructor(private prisma:PrismaService){}



  async create(createDocumentDto: CreateDocumentDto,userId:string) {

    const newDocument= this.prisma.document.create({
      data:{
        title:createDocumentDto.title,
        description:createDocumentDto.description,
        departmentId:createDocumentDto.departmentId,
        creatorId:userId
      }
    })
    return newDocument;
  }

  async findAll() {

   const documents=await this.prisma.document.findMany({
   })
    return documents;
  }



  async findOne(id: string) {

    const document=await this.prisma.document.findUnique({where: {id: id}});
    if(!document){
      throw new ForbiddenException("Document not found")
    }
    return document;
  }




  async update(id: string, updateDocumentDto: UpdateDocumentDto) {
    const document=await this.prisma.document.findUnique({where: {id: id}});

    if(!document){
      throw new ForbiddenException("Document does't exist")
    }

    await this.prisma.document.update({
      where: {id: id},
      data:updateDocumentDto
    })


    return {message:"Document updated successfully"};
  }








  
  async remove(id: string) {
    const document=await this.prisma.document.findUnique({where: {id: id}});

    if(!document){
      throw new ForbiddenException("Document does't exist")
    }
    await this.prisma.document.delete({where: {id: id}});
    return {message:"document deleted successfully"};
  }
}
