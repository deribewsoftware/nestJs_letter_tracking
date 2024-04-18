/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { sendEmail } from './mailer.dto';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post()
  sendMail(@Body() dto:sendEmail){
    return  this.mailerService.sendMailer(dto)
  }
}
