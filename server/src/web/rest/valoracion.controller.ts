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
import { GetValoracionDTO } from '../../service/dto/getValoration.dto';
import { ValoracionService } from '../../service/valoracion.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { HeaderUtil } from '../../client/header-util';
import { Request } from '../../client/request';
import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';
import { ValorationsStars } from '../../domain/enumeration/ValorationsStars';
import { request } from 'http';

@Controller('api/valorations')
// @UseGuards(AuthGuard, RolesGuard)
// @UseInterceptors(LoggingInterceptor, ClassSerializerInterceptor)
// @ApiBearerAuth()
@ApiUseTags('valorations')
export class ValoracionController {
    logger = new Logger('ValoracionController');

    constructor(private readonly valoracionService: ValoracionService) {}

    @Get('/')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'List all records',
        type: GetValoracionDTO,
    })
    async getAll(@Req() req: Request): Promise<GetValoracionDTO[]> {
        const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
        const [results, count] = await this.valoracionService.findAndCount({
            skip: +pageRequest.page * pageRequest.size,
            take: +pageRequest.size,
            order: pageRequest.sort.asOrder(),
        });
        HeaderUtil.addPaginationHeaders(req.res, new Page(results, count, pageRequest));
        return results;
    }

    @Get('/report' /* /:isForAttention   */)
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'Show report of valorations filtered by type',
        // type: JSON,
    })
    async generateReport(@Body() req: GetValoracionDTO /* @Param('isForAttention') isForAttention: string */): Promise<{}> {
        // report the Valorations of the users
        this.logger.debug("Here the params get:")
        this.logger.debug(req)
        // this.logger.warn(isForAttention);

        const pageRequest: PageRequest = new PageRequest('0', '-1', 'id,ASC');
        const valorationsCount: number[] = [];
        for (let index = 1; index <= Object.keys(ValorationsStars).length; index++) {
            const [results, count] = await this.valoracionService.findAndCount({
                skip: +pageRequest.page * pageRequest.size,
                take: +pageRequest.size,
                order: pageRequest.sort.asOrder(),
                where: {
                    estrellas: index,
                    // isForAttention: isForAttention == 'isForAttention',
                    isForAttention: req.isForAttention,
                },
            });
            valorationsCount.push(count);
        }

        return {
            oneStars: valorationsCount[0],
            twoStars: valorationsCount[1],
            threeStars: valorationsCount[2],
            fourStars: valorationsCount[3],
            fiveStars: valorationsCount[4],
        };
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
        this.logger.debug(valoracionDTO);
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
