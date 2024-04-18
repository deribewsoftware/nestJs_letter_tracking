/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DocumentService } from './document.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { Roles } from 'src/decorators/role.auth';
import { RtGuard } from 'src/auth/guard/rt.guards';
import { Role } from 'src/decorators/role.enum';
import { RolesGuard } from 'src/auth/guard/role.guard';
import { GetUser } from 'src/decorators';


@Roles(Role.ADMIN)
@UseGuards(RtGuard, RolesGuard)
@Controller('document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Post()
  create(@Body() createDocumentDto: CreateDocumentDto, @GetUser() user:any) {
    return this.documentService.create(createDocumentDto,user['id']);
  }

  @Get()
  findAll() {
    return this.documentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentService.findOne(id);
  }

  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocumentDto: UpdateDocumentDto) {
    return this.documentService.update(id, updateDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentService.remove(id);
  }
}
