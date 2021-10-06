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
const medico_dto_1 = require("../../service/dto/medico.dto");
const medico_service_1 = require("../../service/medico.service");
const pagination_entity_1 = require("../../domain/base/pagination.entity");
const security_1 = require("../../security");
const header_util_1 = require("../../client/header-util");
let MedicoController = class MedicoController {
    constructor(medicoService) {
        this.medicoService = medicoService;
        this.logger = new common_1.Logger('MedicoController');
    }
    async getAll(req) {
        const pageRequest = new pagination_entity_1.PageRequest(req.query.page, req.query.size, req.query.sort);
        const [results, count] = await this.medicoService.findAndCount({
            skip: +pageRequest.page * pageRequest.size,
            take: +pageRequest.size,
            order: pageRequest.sort.asOrder(),
        });
        header_util_1.HeaderUtil.addPaginationHeaders(req.res, new pagination_entity_1.Page(results, count, pageRequest));
        return results;
    }
    async getOne(id) {
        return await this.medicoService.findById(id);
    }
    async post(req, medicoDTO) {
        var _a;
        const created = await this.medicoService.save(medicoDTO, (_a = req.user) === null || _a === void 0 ? void 0 : _a.login);
        header_util_1.HeaderUtil.addEntityCreatedHeaders(req.res, 'Medico', created.id);
        return created;
    }
    async put(req, medicoDTO) {
        var _a;
        header_util_1.HeaderUtil.addEntityCreatedHeaders(req.res, 'Medico', medicoDTO.id);
        return await this.medicoService.update(medicoDTO, (_a = req.user) === null || _a === void 0 ? void 0 : _a.login);
    }
    async putId(req, medicoDTO) {
        var _a;
        header_util_1.HeaderUtil.addEntityCreatedHeaders(req.res, 'Medico', medicoDTO.id);
        return await this.medicoService.update(medicoDTO, (_a = req.user) === null || _a === void 0 ? void 0 : _a.login);
    }
    async deleteById(req, id) {
        header_util_1.HeaderUtil.addEntityDeletedHeaders(req.res, 'Medico', id);
        return await this.medicoService.deleteById(id);
    }
};
__decorate([
    common_1.Get('/'),
    security_1.Roles(security_1.RoleType.USER),
    swagger_1.ApiResponse({
        status: 200,
        description: 'List all records',
        type: medico_dto_1.MedicoDTO,
    }),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MedicoController.prototype, "getAll", null);
__decorate([
    common_1.Get('/:id'),
    security_1.Roles(security_1.RoleType.USER),
    swagger_1.ApiResponse({
        status: 200,
        description: 'The found record',
        type: medico_dto_1.MedicoDTO,
    }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicoController.prototype, "getOne", null);
__decorate([
    common_1.Post('/'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiOperation({ title: 'Create medico' }),
    swagger_1.ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: medico_dto_1.MedicoDTO,
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, medico_dto_1.MedicoDTO]),
    __metadata("design:returntype", Promise)
], MedicoController.prototype, "post", null);
__decorate([
    common_1.Put('/'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiOperation({ title: 'Update medico' }),
    swagger_1.ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: medico_dto_1.MedicoDTO,
    }),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, medico_dto_1.MedicoDTO]),
    __metadata("design:returntype", Promise)
], MedicoController.prototype, "put", null);
__decorate([
    common_1.Put('/:id'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiOperation({ title: 'Update medico with id' }),
    swagger_1.ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: medico_dto_1.MedicoDTO,
    }),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, medico_dto_1.MedicoDTO]),
    __metadata("design:returntype", Promise)
], MedicoController.prototype, "putId", null);
__decorate([
    common_1.Delete('/:id'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiOperation({ title: 'Delete medico' }),
    swagger_1.ApiResponse({
        status: 204,
        description: 'The record has been successfully deleted.',
    }),
    __param(0, common_1.Req()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MedicoController.prototype, "deleteById", null);
MedicoController = __decorate([
    common_1.Controller('api/medicos')
    // @UseGuards(AuthGuard, RolesGuard)
    // @UseInterceptors(LoggingInterceptor, ClassSerializerInterceptor)
    // @ApiBearerAuth()
    ,
    swagger_1.ApiUseTags('medicos'),
    __metadata("design:paramtypes", [medico_service_1.MedicoService])
], MedicoController);
exports.MedicoController = MedicoController;
//# sourceMappingURL=medico.controller.js.map