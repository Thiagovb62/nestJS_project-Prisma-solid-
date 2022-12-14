import { Injectable } from '@nestjs/common';
import { MailService } from "./mail.service";

@Injectable()
export class SMTPMailService implements MailService{
    sendEmail(): string {
        return "Sending email via SMTP";
    }
}
