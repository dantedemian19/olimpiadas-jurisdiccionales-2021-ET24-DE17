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
import { ProvinciaDTO } from '../../service/dto/provincia.dto';
import { ProvinciaService } from '../../service/provincia.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { HeaderUtil } from '../../client/header-util';
import { Request } from '../../client/request';
import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';
import { CiudadDTO } from "../../service/dto/ciudad.dto";
import { ciudadeservice } from "../../service/ciudad.service";

@Controller('api/provincias')
// @UseGuards(AuthGuard, RolesGuard)
// @UseInterceptors(LoggingInterceptor, ClassSerializerInterceptor)
// @ApiBearerAuth()
@ApiUseTags('provincias')
export class ProvinciaController {
    logger = new Logger('ProvinciaController');

    constructor(
        private readonly provinciaService: ProvinciaService,
        private readonly ciudadeservice: ciudadeservice
    ) {}

    @Get('/')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'List all records',
        type: ProvinciaDTO,
    })
    async getAll(@Req() req: Request): Promise<ProvinciaDTO[]> {
        const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
        const [results, count] = await this.provinciaService.findAndCount({
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
        type: ProvinciaDTO,
    })
    async getAllCities(@Param('id') id: string): Promise<ProvinciaDTO> {
        return await this.provinciaService.findById(id);
    }

    @Get('/:id/cities')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'The cities found',
        type: CiudadDTO,
    })
    async getOne(@Param('id') id: string): Promise<CiudadDTO[]> {
        const [results, count] = await this.ciudadeservice.findAndCount({
            where: {
                provinciaId: id
            }
        });
        return results;
    }

    @PostMethod('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Create provincia' })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: ProvinciaDTO,
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async post(@Req() req: Request, @Body() provinciaDTO: ProvinciaDTO): Promise<ProvinciaDTO> {
        const created = await this.provinciaService.save(provinciaDTO, req.user?.login);
        HeaderUtil.addEntityCreatedHeaders(req.res, 'Provincia', created.id);
        return created;
    }

    @Put('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update provincia' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: ProvinciaDTO,
    })
    async put(@Req() req: Request, @Body() provinciaDTO: ProvinciaDTO): Promise<ProvinciaDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'Provincia', provinciaDTO.id);
        return await this.provinciaService.update(provinciaDTO, req.user?.login);
    }

    @Put('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Update provincia with id' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: ProvinciaDTO,
    })
    async putId(@Req() req: Request, @Body() provinciaDTO: ProvinciaDTO): Promise<ProvinciaDTO> {
        HeaderUtil.addEntityCreatedHeaders(req.res, 'Provincia', provinciaDTO.id);
        return await this.provinciaService.update(provinciaDTO, req.user?.login);
    }

    @Delete('/:id')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Delete provincia' })
    @ApiResponse({
        status: 204,
        description: 'The record has been successfully deleted.',
    })
    async deleteById(@Req() req: Request, @Param('id') id: string): Promise<void> {
        HeaderUtil.addEntityDeletedHeaders(req.res, 'Provincia', id);
        return await this.provinciaService.deleteById(id);
    }
}
