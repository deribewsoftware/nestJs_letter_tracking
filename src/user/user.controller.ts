/* eslint-disable prettier/prettier */
import { Controller, Get,  Body, Patch, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';

import { UpdateUserDto } from './dto/update-user.dto';
import { RtGuard } from 'src/auth/guard/rt.guards';
import { GetUser } from 'src/decorators';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

 

@UseGuards(RtGuard)
  @Get()
  myProfile(@GetUser() userId:any) {
    return this.userService.myProfile(userId['id']);
  }


  @Get("all")
  getAllUsers(){
    return this.userService.getAllUsers();
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  
}
