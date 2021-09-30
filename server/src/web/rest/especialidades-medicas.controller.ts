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
import { EspecialidadesMedicasDTO } from '../../service/dto/especialidades-medicas.dto';
import { EspecialidadesMedicasService } from '../../service/especialidades-medicas.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { HeaderUtil } from '../../client/header-util';
import { Request } from '../../client/request';
import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';

@Controller('api/especialidades-medicas')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor, ClassSerializerInterceptor)
@ApiBearerAuth()
@ApiUseTags('especialidades-medicas')
export class EspecialidadesMedicasController {
    logger = new Logger('EspecialidadesMedicasController');

    constructor(private readonly especialidadesMedicasService: EspecialidadesMedicasService) { }

    @Get('/')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'List all records',
        type: EspecialidadesMedicasDTO,
    })
    async getAll(@Req() req: Request): Promise<EspecialidadesMedicasDTO[]> {
        const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
        const [results, count] = await this.especialidadesMedicasService.findAndCount({
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
        type: EspecialidadesMedicasDTO,
    })
    async getOne(@Param('id') id: string): Promise<EspecialidadesMedicasDTO> {
        return await this.especialidadesMedicasService.findById(id);
    }

    @PostMethod('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Create especialidadesMedicas' })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: EspecialidadesMedicasDTO,
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async post(
        @Req() req: Request,
        @Body() especialidadesMedicasDTO: EspecialidadesMedicasDTO,
    ): Promise<EspecialidadesMedicasDTO> {
        const created = await this.especialidadesMedicasService.save(especialidadesMedicasDTO, req.user?.login);
        HeaderUtil.addEntityCreatedHeaders(req.res, 'EspecialidadesMedicas', created.id);
        return created;
    }

    @Put('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update especialidadesMedicas' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: EspecialidadesMedicasDTO,
    })
    async put(
        @Req() req: Request,
        @Body() especialidadesMedicasDTO: EspecialidadesMedicasDTO,
    ): Promise<EspecialidadesMedicasDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'EspecialidadesMedicas', especialidadesMedicasDTO.id);
        return await this.especialidadesMedicasService.update(especialidadesMedicasDTO, req.user?.login);
    }

    @Put('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update especialidadesMedicas with id' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: EspecialidadesMedicasDTO,
    })
    async putId(
        @Req() req: Request,
        @Body() especialidadesMedicasDTO: EspecialidadesMedicasDTO,
    ): Promise<EspecialidadesMedicasDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'EspecialidadesMedicas', especialidadesMedicasDTO.id);
        return await this.especialidadesMedicasService.update(especialidadesMedicasDTO, req.user?.login);
    }

    @Delete('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Delete especialidadesMedicas' })
    @ApiResponse({
        status: 204,
        description: 'The record has been successfully deleted.',
    })
    async deleteById(@Req() req: Request, @Param('id') id: string): Promise<void> {
        HeaderUtil.addEntityDeletedHeaders(req.res, 'EspecialidadesMedicas', id);
        return await this.especialidadesMedicasService.deleteById(id);
    }
}
