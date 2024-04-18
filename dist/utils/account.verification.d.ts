import Mail from 'nodemailer/lib/mailer';
export declare const mailerOption: (email: string, activationCode: string, token: string) => Mail.Options;
