import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    Logger,
    Param,
    Post as PostMethod,
    Put,
    UseGuards,
    Req,
    UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { HeaderUtil } from '../../client/header-util';
import { Request } from '../../client/request';
import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';
import { mailService } from '../service/mail.service';

@Controller('api/mail')
@UseInterceptors(LoggingInterceptor, ClassSerializerInterceptor)
@ApiUseTags('mail')
export class MailController{
    logger = new Logger('MailController');

    constructor(private readonly mailService: mailService) {}
    @Get('/')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'List all record',
        type: 0,
    })
    async TurnoSendMail(): Promise<number> {
        if(await this.mailService.mailTurno) return 200;

    }
    @Get('/')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'List all record',
        type: 0,
    })
    async NotificationSendMail(): Promise<number> {
        if(await this.mailService.mailContactanos) return 200;

    }
}