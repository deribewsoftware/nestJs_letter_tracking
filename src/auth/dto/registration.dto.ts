/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
export class RegistrationUserDto{
  @IsString()
  @IsNotEmpty()
  full_name:string;

  @IsEmail()
  @IsNotEmpty()
  email:string;

  @IsString()
  @IsNotEmpty()
  password:string;

  @IsString()
  @IsNotEmpty()
  retypePassword:string;
}