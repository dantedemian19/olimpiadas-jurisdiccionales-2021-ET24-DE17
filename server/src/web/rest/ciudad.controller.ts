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
import { CiudadDTO } from '../../service/dto/ciudad.dto';
import { ciudadeservice } from '../../service/ciudad.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { HeaderUtil } from '../../client/header-util';
import { Request } from '../../client/request';
import { TurnoDTO } from "../../service/dto/turno.dto";
import { TurnoService } from '../../service/turno.service';
import { MedicoService } from '../../service/medico.service';
import { HistoriaClinicaService } from '../../service/historia-clinica.service';
var ObjectId = require('mongodb').ObjectId;

@Controller('api/ciudades')
// @UseGuards(AuthGuard, RolesGuard)
// @UseInterceptors(LoggingInterceptor, ClassSerializerInterceptor)
// @ApiBearerAuth()
@ApiUseTags('ciudades')
export class CiudadController {
    logger = new Logger('CiudadController');

    constructor(
        private readonly ciudadeservice: ciudadeservice,
        private readonly turnosService: TurnoService,
        private readonly medicoService: MedicoService,
        private readonly historiaClinicaService: HistoriaClinicaService
    ) {}

    @Get('/')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'List all records',
        type: CiudadDTO,
    })
    async getAll(@Req() req: Request): Promise<CiudadDTO[]> {
        const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
        const [results, count] = await this.ciudadeservice.findAndCount({
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
        type: CiudadDTO,
    })
    async getOne(@Param('id') id: string): Promise<CiudadDTO> {
        return await this.ciudadeservice.findById(id);
    }

    @Get('/:id/turnos')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'The records found',
        type: CiudadDTO,
    })
    async getTurnos(@Param('id') id: string): Promise<TurnoDTO[]> {

        // this.logger.debug(id);

        const [medicosResults, medicosCount] = await this.medicoService.findAndCount({
            where: {
                ciudadId: id
            }
        });
        const medicoIds = medicosResults.map( medico => medico.id.toString() );

        // console.log("Medicos en la provincia");
        // console.log(medicoIds);

        const [historiasResults, historiasCounts] = await this.historiaClinicaService.findAndCount({
            where: {
                id_medico: {
                    $in: medicoIds
                }
            }
        });

        const historiasIds = historiasResults.map(historia => new ObjectId(historia.id_turno) );
        
        // console.log("Historias con el medico");
        // console.log(historiasIds);

        const [turnoResults, turnoCount] = await this.turnosService.findAndCount({
            where: {
                _id: {
                    $in: historiasIds
                }
            }
        });

        return turnoResults;
    }

    @PostMethod('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Create ciudad' })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: CiudadDTO,
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async post(@Req() req: Request, @Body() ciudadDTO: CiudadDTO): Promise<CiudadDTO> {
        const created = await this.ciudadeservice.save(ciudadDTO, req.user?.login);
        HeaderUtil.addEntityCreatedHeaders(req.res, 'Ciudad', created.id);
        return created;
    }

    @Put('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update ciudad' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: CiudadDTO,
    })
    async put(@Req() req: Request, @Body() ciudadDTO: CiudadDTO): Promise<CiudadDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'Ciudad', ciudadDTO.id);
        return await this.ciudadeservice.update(ciudadDTO, req.user?.login);
    }

    @Put('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update ciudad with id' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: CiudadDTO,
    })
    async putId(@Req() req: Request, @Body() ciudadDTO: CiudadDTO): Promise<CiudadDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'Ciudad', ciudadDTO.id);
        return await this.ciudadeservice.update(ciudadDTO, req.user?.login);
    }

    @Delete('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Delete ciudad' })
    @ApiResponse({
        status: 204,
        description: 'The record has been successfully deleted.',
    })
    async deleteById(@Req() req: Request, @Param('id') id: string): Promise<void> {
        HeaderUtil.addEntityDeletedHeaders(req.res, 'Ciudad', id);
        return await this.ciudadeservice.deleteById(id);
    }
}
