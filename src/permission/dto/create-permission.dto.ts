/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePermissionDto {
 
  
  @IsString()
  @IsNotEmpty()
  action: string;

  @IsString()
  @IsOptional()
  roleId: string;
}
