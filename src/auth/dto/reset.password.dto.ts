/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

export class ResetPassword{
  @IsString()
  @IsNotEmpty()
  confirmPassword: string;

  @IsString()
  @IsNotEmpty()
  password: string;


  @IsString()
  @IsNotEmpty()
 token: string;
}