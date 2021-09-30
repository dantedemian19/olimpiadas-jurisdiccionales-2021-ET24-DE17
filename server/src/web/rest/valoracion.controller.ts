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
import { ValoracionDTO } from '../../service/dto/valoracion.dto';
import { ValoracionService } from '../../service/valoracion.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { HeaderUtil } from '../../client/header-util';
import { Request } from '../../client/request';
import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';

@Controller('api/valoracions')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor, ClassSerializerInterceptor)
@ApiBearerAuth()
@ApiUseTags('valoracions')
export class ValoracionController {
    logger = new Logger('ValoracionController');

    constructor(private readonly valoracionService: ValoracionService) {}

    @Get('/')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'List all records',
        type: ValoracionDTO,
    })
    async getAll(@Req() req: Request): Promise<ValoracionDTO[]> {
        const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
        const [results, count] = await this.valoracionService.findAndCount({
            skip: +pageRequest.page * pageRequest.size,
            take: +pageRequest.size,
            order: pageRequest.sort.asOrder(),
        });
        HeaderUtil.addPaginationHeaders(req.res, new Page(results, count, pageRequest));
        return results;
    }

    @Get('/:id')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: ValoracionDTO,
    })
    async getOne(@Param('id') id: string): Promise<ValoracionDTO> {
        return await this.valoracionService.findById(id);
    }

    @PostMethod('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Create valoracion' })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: ValoracionDTO,
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async post(@Req() req: Request, @Body() valoracionDTO: ValoracionDTO): Promise<ValoracionDTO> {
        const created = await this.valoracionService.save(valoracionDTO, req.user?.login);
        HeaderUtil.addEntityCreatedHeaders(req.res, 'Valoracion', created.id);
        return created;
    }

    @Put('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update valoracion' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: ValoracionDTO,
    })
    async put(@Req() req: Request, @Body() valoracionDTO: ValoracionDTO): Promise<ValoracionDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'Valoracion', valoracionDTO.id);
        return await this.valoracionService.update(valoracionDTO, req.user?.login);
    }

    @Put('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update valoracion with id' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: ValoracionDTO,
    })
    async putId(@Req() req: Request, @Body() valoracionDTO: ValoracionDTO): Promise<ValoracionDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'Valoracion', valoracionDTO.id);
        return await this.valoracionService.update(valoracionDTO, req.user?.login);
    }

    @Delete('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Delete valoracion' })
    @ApiResponse({
        status: 204,
        description: 'The record has been successfully deleted.',
    })
    async deleteById(@Req() req: Request, @Param('id') id: string): Promise<void> {
        HeaderUtil.addEntityDeletedHeaders(req.res, 'Valoracion', id);
        return await this.valoracionService.deleteById(id);
    }
}