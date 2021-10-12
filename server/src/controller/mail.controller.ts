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
import { PageRequest, Page } from '../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../security';
import { HeaderUtil } from '../client/header-util';
import { Request } from '../client/request';
import { LoggingInterceptor } from '../client/interceptors/logging.interceptor';
import { mailService } from '../service/mail.service';
import { mailYourTurnDTO } from 'src/service/dto/mail.dto';
import { mailMedicNotificationDTO } from 'src/service/dto/mail.dto';

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
        type: 200,
    })
    async TurnoSendMail(@Body()mail: mailYourTurnDTO): Promise<any> {
        return await this.mailService.mailYourTurn(mail.paciente,mail.medico,mail.turno);

    }
    @Get('/')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'List all record',
        type: 0,
    })
    async NotificationSendMail(@Body()text: string): Promise<any> {
        return await this.mailService.mailContactUs(text);

    }

    @Get('/')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'List all record',
        type: 0,
    })
    async MedicRegisterSendMail(@Body()maildata: mailMedicNotificationDTO): Promise<any> {
        return await this.mailService.mailMedic(maildata.medico,maildata.user);

    }
}