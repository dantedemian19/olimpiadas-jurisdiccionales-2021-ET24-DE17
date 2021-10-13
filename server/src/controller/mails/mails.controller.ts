import { Controller, Get } from '@nestjs/common';

@Controller('mails')
export class MailsController {
    @Get('mail')
    sdsad() {
        return "asdas";
    }
}
