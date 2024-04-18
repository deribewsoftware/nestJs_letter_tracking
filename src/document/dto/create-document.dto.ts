/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";


export class CreateDocumentDto {
  @IsString()
  @IsNotEmpty()
  departmentId:string;

  @IsString()
  @IsNotEmpty()
  title:string;


  @IsString()
  @IsNotEmpty()
  description:string;
}
