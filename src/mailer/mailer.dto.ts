/* eslint-disable prettier/prettier */
import { Address } from "nodemailer/lib/mailer";
export type sendMailDto={
  from?: Address
  email: string
  subject:string;
  text?:string;
  html:string;
  placeholderReplacement?:string;

}

export type sendEmail={
  email:string;
  template:string;
  name:string;
  subject:string;
}