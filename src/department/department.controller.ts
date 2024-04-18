/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { RequiredPermission } from 'src/decorators/permission';
import { PermissionGuard } from 'src/auth/guard/permission.guard';
import { RtGuard } from 'src/auth/guard/rt.guards';


@RequiredPermission('canManageDepartment')
@UseGuards(RtGuard, PermissionGuard)
@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @RequiredPermission('canPostDepartment', 'canManageDepartment')
  @Post(':organizationId')
  create(@Param('organizationId') organizationId: string, @Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentService.create(createDepartmentDto,organizationId);
  }
  

  @RequiredPermission('canListDepartment')
  @Get()
  findAll() {
    return this.departmentService.findAll();
  }


  @RequiredPermission('canDetailDepartment')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentService.findOne(id);
  }


  @RequiredPermission('canUpdateDepartment')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentService.update(id, updateDepartmentDto);
  }


  @RequiredPermission('canDeleteDepartment')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentService.remove(id);
  }
}
