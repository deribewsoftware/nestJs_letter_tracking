import { MailerService } from './mailer.service';
import { sendEmail } from './mailer.dto';
export declare class MailerController {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendMail(dto: sendEmail): Promise<{
        success: string;
    }>;
}
