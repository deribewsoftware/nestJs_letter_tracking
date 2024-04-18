/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
export class ActivationAccountDto{
  @IsString()
  @IsNotEmpty()
  activation_code: string;

  @IsString()
  @IsNotEmpty()
  activation_token:string;
}