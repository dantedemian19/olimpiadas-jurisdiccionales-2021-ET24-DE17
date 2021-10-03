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
import { HistoriaClinicaDTO } from '../../service/dto/historia-clinica.dto';
import { HistoriaClinicaService } from '../../service/historia-clinica.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { HeaderUtil } from '../../client/header-util';
import { Request } from '../../client/request';
import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';
import { EspecialidadesTipo } from '../../domain/enumeration/especialidades-tipo';
import { Categoria } from '../../domain/enumeration/categoria';
import { GetHistoryByIdDTO } from '../../service/dto/historybyid.dto';
import { count } from 'console';


@Controller('api/historia-clinicas')
// @UseGuards(AuthGuard, RolesGuard)
// @UseInterceptors(LoggingInterceptor, ClassSerializerInterceptor)
// @ApiBearerAuth()
@ApiUseTags('historia-clinicas')
export class HistoriaClinicaController {
    logger = new Logger('HistoriaClinicaController');

    constructor(private readonly historiaClinicaService: HistoriaClinicaService) {}

    @Get('/')
    @Roles(RoleType.ADMIN)
    @ApiResponse({
        status: 200,
        description: 'List all records',
        type: HistoriaClinicaDTO,
    })
    async getAll(@Req() req: Request): Promise<HistoriaClinicaDTO[]> {
        const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
        const [results, count] = await this.historiaClinicaService.findAndCount({
            skip: +pageRequest.page * pageRequest.size,
            take: +pageRequest.size,
            order: pageRequest.sort.asOrder(),
        });
        HeaderUtil.addPaginationHeaders(req.res, new Page(results, count, pageRequest));
        return results;
    }
    @Get('/report')
    @Roles(RoleType.ADMIN)
    @ApiResponse({
        status: 200,
        description: 'List all records',
    })
    async generateReport(@Req() req: Request): Promise<any> {
        // report the cuantity of historiasClinicas, por especialidad y por categoria
        const pageRequest: PageRequest = new PageRequest('0', '-1', 'id,ASC');
        class temp {
            especiality: string;
            perCategory: number[];
        }
        const diseaseKindCount: temp[] = [];
        for (let index = 0; index < Object.keys(EspecialidadesTipo).length; index += 1) {
            for (let indexCategory = 0; indexCategory < Object.keys(Categoria).length; indexCategory += 1) {
                const [results, count] = await this.historiaClinicaService.findAndCount({
                    skip: +pageRequest.page * pageRequest.size,
                    take: +pageRequest.size,
                    order: pageRequest.sort.asOrder(),
                    where: {
                        categoria: `${Categoria[indexCategory]}`,
                        EspecialidadTipo: `${EspecialidadesTipo[index]}`,
                    },
                });
                if (diseaseKindCount[index]) {
                    diseaseKindCount[index].perCategory.push(count);
                } else {
                    diseaseKindCount[index] = new temp;
                    diseaseKindCount[index].perCategory = [count];
                }
            }
            
            this.logger.debug(Object.keys(EspecialidadesTipo)[index]);
            diseaseKindCount[index].especiality = Object.keys(EspecialidadesTipo)[index];
        }
        return {
            diseaseKindCount,
        };
    }
    @Get('/obtainHistory')
    @Roles(RoleType.USER, RoleType.MEDICO)
    @ApiResponse({
        status: 200,
        description: 'Results: ',
    })
    async obtainHistory(@Req() req: Request, @Body() get: GetHistoryByIdDTO): Promise<any> {
        // report the cuantity of historiasClinicas, por especialidad y por categoria
        //this.logger.debug('Here the params get:');
        //this.logger.debug(get.IsForPaciente);
        //this.logger.debug(get.ID);
        const pageRequest: PageRequest = new PageRequest('0', '-1', 'id,ASC');
        let response: HistoriaClinicaDTO [] = [];
        let results,count;
        if(get.IsForPaciente){ 
            [results,count] = await this.historiaClinicaService.findAndCount({ where: {paciente: get.ID}});
        }
        else {
            [results,count] = await this.historiaClinicaService.findAndCount({ where: {medico: get.ID}});
        }
        return {
            results
        };
    }
    @Get('/:id')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: HistoriaClinicaDTO,
    })
    async getOne(@Param('id') id: string): Promise<HistoriaClinicaDTO> {
        return await this.historiaClinicaService.findById(id);
    }

    @PostMethod('/')
    @Roles(RoleType.MEDICO)
    @ApiOperation({ title: 'Create historiaClinica' })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: HistoriaClinicaDTO,
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async post(@Req() req: Request, @Body() historiaClinicaDTO: HistoriaClinicaDTO): Promise<HistoriaClinicaDTO> {
        const created = await this.historiaClinicaService.save(historiaClinicaDTO, req.user?.login);
        HeaderUtil.addEntityCreatedHeaders(req.res, 'HistoriaClinica', created.id);
        return created;
    }

    @Put('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update historiaClinica' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: HistoriaClinicaDTO,
    })
    async put(@Req() req: Request, @Body() historiaClinicaDTO: HistoriaClinicaDTO): Promise<HistoriaClinicaDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'HistoriaClinica', historiaClinicaDTO.id);
        return await this.historiaClinicaService.update(historiaClinicaDTO, req.user?.login);
    }

    @Put('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update historiaClinica with id' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: HistoriaClinicaDTO,
    })
    async putId(@Req() req: Request, @Body() historiaClinicaDTO: HistoriaClinicaDTO): Promise<HistoriaClinicaDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'HistoriaClinica', historiaClinicaDTO.id);
        return await this.historiaClinicaService.update(historiaClinicaDTO, req.user?.login);
    }

    @Delete('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Delete historiaClinica' })
    @ApiResponse({
        status: 204,
        description: 'The record has been successfully deleted.',
    })
    async deleteById(@Req() req: Request, @Param('id') id: string): Promise<void> {
        HeaderUtil.addEntityDeletedHeaders(req.res, 'HistoriaClinica', id);
        return await this.historiaClinicaService.deleteById(id);
    }
}
