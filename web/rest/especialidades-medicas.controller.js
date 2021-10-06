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
const especialidades_medicas_dto_1 = require("../../service/dto/especialidades-medicas.dto");
const especialidades_medicas_service_1 = require("../../service/especialidades-medicas.service");
const pagination_entity_1 = require("../../domain/base/pagination.entity");
const security_1 = require("../../security");
const header_util_1 = require("../../client/header-util");
const logging_interceptor_1 = require("../../client/interceptors/logging.interceptor");
let EspecialidadesMedicasController = class EspecialidadesMedicasController {
    constructor(especialidadesMedicasService) {
        this.especialidadesMedicasService = especialidadesMedicasService;
        this.logger = new common_1.Logger('EspecialidadesMedicasController');
    }
    async getAll(req) {
        const pageRequest = new pagination_entity_1.PageRequest(req.query.page, req.query.size, req.query.sort);
        const [results, count] = await this.especialidadesMedicasService.findAndCount({
            skip: +pageRequest.page * pageRequest.size,
            take: +pageRequest.size,
            order: pageRequest.sort.asOrder(),
        });
        header_util_1.HeaderUtil.addPaginationHeaders(req.res, new pagination_entity_1.Page(results, count, pageRequest));
        return results;
    }
    async getOne(id) {
        return await this.especialidadesMedicasService.findById(id);
    }
    async post(req, especialidadesMedicasDTO) {
        var _a;
        const created = await this.especialidadesMedicasService.save(especialidadesMedicasDTO, (_a = req.user) === null || _a === void 0 ? void 0 : _a.login);
        header_util_1.HeaderUtil.addEntityCreatedHeaders(req.res, 'EspecialidadesMedicas', created.id);
        return created;
    }
    async put(req, especialidadesMedicasDTO) {
        var _a;
        header_util_1.HeaderUtil.addEntityCreatedHeaders(req.res, 'EspecialidadesMedicas', especialidadesMedicasDTO.id);
        return await this.especialidadesMedicasService.update(especialidadesMedicasDTO, (_a = req.user) === null || _a === void 0 ? void 0 : _a.login);
    }
    async putId(req, especialidadesMedicasDTO) {
        var _a;
        header_util_1.HeaderUtil.addEntityCreatedHeaders(req.res, 'EspecialidadesMedicas', especialidadesMedicasDTO.id);
        return await this.especialidadesMedicasService.update(especialidadesMedicasDTO, (_a = req.user) === null || _a === void 0 ? void 0 : _a.login);
    }
    async deleteById(req, id) {
        header_util_1.HeaderUtil.addEntityDeletedHeaders(req.res, 'EspecialidadesMedicas', id);
        return await this.especialidadesMedicasService.deleteById(id);
    }
};
__decorate([
    common_1.Get('/'),
    security_1.Roles(security_1.RoleType.USER),
    swagger_1.ApiResponse({
        status: 200,
        description: 'List all records',
        type: especialidades_medicas_dto_1.EspecialidadesMedicasDTO,
    }),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EspecialidadesMedicasController.prototype, "getAll", null);
__decorate([
    common_1.Get('/:id'),
    security_1.Roles(security_1.RoleType.USER),
    swagger_1.ApiResponse({
        status: 200,
        description: 'The found record',
        type: especialidades_medicas_dto_1.EspecialidadesMedicasDTO,
    }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EspecialidadesMedicasController.prototype, "getOne", null);
__decorate([
    common_1.Post('/'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiOperation({ title: 'Create especialidadesMedicas' }),
    swagger_1.ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: especialidades_medicas_dto_1.EspecialidadesMedicasDTO,
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    __param(0, common_1.Req()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, especialidades_medicas_dto_1.EspecialidadesMedicasDTO]),
    __metadata("design:returntype", Promise)
], EspecialidadesMedicasController.prototype, "post", null);
__decorate([
    common_1.Put('/'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiOperation({ title: 'Update especialidadesMedicas' }),
    swagger_1.ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: especialidades_medicas_dto_1.EspecialidadesMedicasDTO,
    }),
    __param(0, common_1.Req()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, especialidades_medicas_dto_1.EspecialidadesMedicasDTO]),
    __metadata("design:returntype", Promise)
], EspecialidadesMedicasController.prototype, "put", null);
__decorate([
    common_1.Put('/:id'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiOperation({ title: 'Update especialidadesMedicas with id' }),
    swagger_1.ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: especialidades_medicas_dto_1.EspecialidadesMedicasDTO,
    }),
    __param(0, common_1.Req()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, especialidades_medicas_dto_1.EspecialidadesMedicasDTO]),
    __metadata("design:returntype", Promise)
], EspecialidadesMedicasController.prototype, "putId", null);
__decorate([
    common_1.Delete('/:id'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiOperation({ title: 'Delete especialidadesMedicas' }),
    swagger_1.ApiResponse({
        status: 204,
        description: 'The record has been successfully deleted.',
    }),
    __param(0, common_1.Req()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], EspecialidadesMedicasController.prototype, "deleteById", null);
EspecialidadesMedicasController = __decorate([
    common_1.Controller('api/especialidades-medicas'),
    common_1.UseGuards(security_1.AuthGuard, security_1.RolesGuard),
    common_1.UseInterceptors(logging_interceptor_1.LoggingInterceptor, common_1.ClassSerializerInterceptor),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiUseTags('especialidades-medicas'),
    __metadata("design:paramtypes", [especialidades_medicas_service_1.EspecialidadesMedicasService])
], EspecialidadesMedicasController);
exports.EspecialidadesMedicasController = EspecialidadesMedicasController;
//# sourceMappingURL=especialidades-medicas.controller.js.map