/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentDto } from './create-document.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateDocumentDto extends PartialType(CreateDocumentDto) {
  

  @IsString()
  @IsNotEmpty()
  title:string;


  @IsString()
  @IsNotEmpty()
  description:string;
}
