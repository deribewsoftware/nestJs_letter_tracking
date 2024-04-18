/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { PermissionGuard } from 'src/auth/guard/permission.guard';
import { RtGuard } from 'src/auth/guard/rt.guards';
import { RequiredPermission } from 'src/decorators/permission';



@UseGuards(RtGuard, PermissionGuard)
@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @RequiredPermission('canCreateOrganization','canManageOrganization')
  @Post()
  create(@Body() createOrganizationDto: CreateOrganizationDto) {
    return this.organizationService.create(createOrganizationDto);
  }


  @RequiredPermission('canSeeListOrganization','canManageOrganization')
  @Get()
  findAll() {
    return this.organizationService.findAll();
  }


  @RequiredPermission('canSeeDetailOrganization','canManageOrganization')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organizationService.findOne(id);
  }


  @RequiredPermission('canUpdateOrganization','canManageOrganization')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrganizationDto: UpdateOrganizationDto) {
    return this.organizationService.update(id, updateOrganizationDto);
  }


  @RequiredPermission('canDeleteOrganization','canManageOrganization')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organizationService.remove(id);
  }
}
