"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const historia_clinica_dto_1 = require("../../service/dto/historia-clinica.dto");
const historia_clinica_service_1 = require("../../service/historia-clinica.service");
const pagination_entity_1 = require("../../domain/base/pagination.entity");
const security_1 = require("../../security");
const header_util_1 = require("../../client/header-util");
const especialidades_tipo_1 = require("../../domain/enumeration/especialidades-tipo");
const categoria_1 = require("../../domain/enumeration/categoria");
const historybyid_dto_1 = require("../../service/dto/historybyid.dto");
const turno_repository_1 = require("../../repository/turno.repository");
let HistoriaClinicaController = class HistoriaClinicaController {
    constructor(historiaClinicaService) {
        this.historiaClinicaService = historiaClinicaService;
        this.logger = new common_1.Logger('HistoriaClinicaController');
    }
    async getAll(req) {
        const pageRequest = new pagination_entity_1.PageRequest(req.query.page, req.query.size, req.query.sort);
        const [results, count] = await this.historiaClinicaService.findAndCount({
            skip: +pageRequest.page * pageRequest.size,
            take: +pageRequest.size,
            order: pageRequest.sort.asOrder(),
        });
        header_util_1.HeaderUtil.addPaginationHeaders(req.res, new pagination_entity_1.Page(results, count, pageRequest));
        return results;
    }
    async generateReport(req) {
        // report the cuantity of historiasClinicas, por especialidad y por categoria
        const pageRequest = new pagination_entity_1.PageRequest('0', '-1', 'id,ASC');
        const diseaseKindCount = [];
        for (let index = 0; index < Object.keys(especialidades_tipo_1.EspecialidadesTipo).length; index += 1) {
            for (let indexCategory = 0; indexCategory < Object.keys(categoria_1.Categoria).length; indexCategory += 1) {
                const [results, count] = await this.historiaClinicaService.findAndCount({
                    skip: +pageRequest.page * pageRequest.size,
                    take: +pageRequest.size,
                    order: pageRequest.sort.asOrder(),
                    where: {
                        categoria: `${categoria_1.Categoria[indexCategory]}`,
                        EspecialidadTipo: `${especialidades_tipo_1.EspecialidadesTipo[index]}`,
                    },
                });
                if (diseaseKindCount[index]) {
                    diseaseKindCount[index].perCategory.push(count);
                }
                else {
                    diseaseKindCount[index] = new turno_repository_1.temp();
                    diseaseKindCount[index].perCategory = [count];
                }
            }
            this.logger.debug(Object.keys(especialidades_tipo_1.EspecialidadesTipo)[index]);
            diseaseKindCount[index].especiality = Object.keys(especialidades_tipo_1.EspecialidadesTipo)[index];
        }
        return {
            diseaseKindCount,
        };
    }
    async obtainHistory(req, get) {
        // report the cuantity of historiasClinicas, por especialidad y por categoria
        // this.logger.debug('Here the params get:');
        // this.logger.debug(get.IsForPaciente);
        // this.logger.debug(get.ID);
        const pageRequest = new pagination_entity_1.PageRequest('0', '-1', 'id,ASC');
        const response = [];
        let results;
        let count;
        if (get.IsForPaciente) {
            [results, count] = await this.historiaClinicaService.findAndCount({ where: { paciente: get.ID } });
        }
        else {
            [results, count] = await this.historiaClinicaService.findAndCount({ where: { medico: get.ID } });
        }
        return {
            results,
        };
    }
    async getOne(id) {
        return await this.historiaClinicaService.findById(id);
    }
    async post(req, historiaClinicaDTO) {
        var _a;
        const created = await this.historiaClinicaService.save(historiaClinicaDTO, (_a = req.user) === null || _a === void 0 ? void 0 : _a.login);
        header_util_1.HeaderUtil.addEntityCreatedHeaders(req.res, 'HistoriaClinica', created.id);
        return created;
    }
    async put(req, historiaClinicaDTO) {
        var _a;
        header_util_1.HeaderUtil.addEntityCreatedHeaders(req.res, 'HistoriaClinica', historiaClinicaDTO.id);
        return await this.historiaClinicaService.update(historiaClinicaDTO, (_a = req.user) === null || _a === void 0 ? void 0 : _a.login);
    }
    async putId(req, historiaClinicaDTO) {
        var _a;
        header_util_1.HeaderUtil.addEntityCreatedHeaders(req.res, 'HistoriaClinica', historiaClinicaDTO.id);
        return await this.historiaClinicaService.update(historiaClinicaDTO, (_a = req.user) === null || _a === void 0 ? void 0 : _a.login);
    }
    async deleteById(req, id) {
        header_util_1.HeaderUtil.addEntityDeletedHeaders(req.res, 'HistoriaClinica', id);
        return await this.historiaClinicaService.deleteById(id);
    }
};
__decorate([
    common_1.Get('/'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiResponse({
        status: 200,
        description: 'List all records',
        type: historia_clinica_dto_1.HistoriaClinicaDTO,
    }),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HistoriaClinicaController.prototype, "getAll", null);
__decorate([
    common_1.Get('/report'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiResponse({
        status: 200,
        description: 'List all records',
    }),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HistoriaClinicaController.prototype, "generateReport", null);
__decorate([
    common_1.Get('/obtainHistory'),
    security_1.Roles(security_1.RoleType.USER, security_1.RoleType.MEDICO),
    swagger_1.ApiResponse({
        status: 200,
        description: 'Results: ',
    }),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, historybyid_dto_1.GetHistoryByIdDTO]),
    __metadata("design:returntype", Promise)
], HistoriaClinicaController.prototype, "obtainHistory", null);
__decorate([
    common_1.Get('/:id'),
    security_1.Roles(security_1.RoleType.USER),
    swagger_1.ApiResponse({
        status: 200,
        description: 'The found record',
        type: historia_clinica_dto_1.HistoriaClinicaDTO,
    }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HistoriaClinicaController.prototype, "getOne", null);
__decorate([
    common_1.Post('/'),
    security_1.Roles(security_1.RoleType.MEDICO),
    swagger_1.ApiOperation({ title: 'Create historiaClinica' }),
    swagger_1.ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: historia_clinica_dto_1.HistoriaClinicaDTO,
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, historia_clinica_dto_1.HistoriaClinicaDTO]),
    __metadata("design:returntype", Promise)
], HistoriaClinicaController.prototype, "post", null);
__decorate([
    common_1.Put('/'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiOperation({ title: 'Update historiaClinica' }),
    swagger_1.ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: historia_clinica_dto_1.HistoriaClinicaDTO,
    }),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, historia_clinica_dto_1.HistoriaClinicaDTO]),
    __metadata("design:returntype", Promise)
], HistoriaClinicaController.prototype, "put", null);
__decorate([
    common_1.Put('/:id'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiOperation({ title: 'Update historiaClinica with id' }),
    swagger_1.ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: historia_clinica_dto_1.HistoriaClinicaDTO,
    }),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, historia_clinica_dto_1.HistoriaClinicaDTO]),
    __metadata("design:returntype", Promise)
], HistoriaClinicaController.prototype, "putId", null);
__decorate([
    common_1.Delete('/:id'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiOperation({ title: 'Delete historiaClinica' }),
    swagger_1.ApiResponse({
        status: 204,
        description: 'The record has been successfully deleted.',
    }),
    __param(0, common_1.Req()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], HistoriaClinicaController.prototype, "deleteById", null);
HistoriaClinicaController = __decorate([
    common_1.Controller('api/historia-clinicas')
    // @UseGuards(AuthGuard, RolesGuard)
    // @UseInterceptors(LoggingInterceptor, ClassSerializerInterceptor)
    // @ApiBearerAuth()
    ,
    swagger_1.ApiUseTags('historia-clinicas'),
    __metadata("design:paramtypes", [historia_clinica_service_1.HistoriaClinicaService])
], HistoriaClinicaController);
exports.HistoriaClinicaController = HistoriaClinicaController;
//# sourceMappingURL=historia-clinica.controller.js.map