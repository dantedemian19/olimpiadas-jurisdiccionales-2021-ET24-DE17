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
const valoracion_dto_1 = require("../../service/dto/valoracion.dto");
const getValoration_dto_1 = require("../../service/dto/getValoration.dto");
const valoracion_service_1 = require("../../service/valoracion.service");
const pagination_entity_1 = require("../../domain/base/pagination.entity");
const security_1 = require("../../security");
const header_util_1 = require("../../client/header-util");
const ValorationsStars_1 = require("../../domain/enumeration/ValorationsStars");
let ValoracionController = class ValoracionController {
    constructor(valoracionService) {
        this.valoracionService = valoracionService;
        this.logger = new common_1.Logger('ValoracionController');
    }
    async getAll(req) {
        const pageRequest = new pagination_entity_1.PageRequest(req.query.page, req.query.size, req.query.sort);
        const [results, count] = await this.valoracionService.findAndCount({
            skip: +pageRequest.page * pageRequest.size,
            take: +pageRequest.size,
            order: pageRequest.sort.asOrder(),
        });
        header_util_1.HeaderUtil.addPaginationHeaders(req.res, new pagination_entity_1.Page(results, count, pageRequest));
        return results;
    }
    async generateReport(req /* @Param('isForAttention') isForAttention: string */) {
        const pageRequest = new pagination_entity_1.PageRequest('0', '-1', 'id,ASC');
        const valorationsCount = [];
        for (let index = 1; index <= Object.keys(ValorationsStars_1.ValorationsStars).length; index++) {
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
    async getOne(id) {
        return await this.valoracionService.findById(id);
    }
    async post(req, valoracionDTO) {
        var _a;
        const created = await this.valoracionService.save(valoracionDTO, (_a = req.user) === null || _a === void 0 ? void 0 : _a.login);
        header_util_1.HeaderUtil.addEntityCreatedHeaders(req.res, 'Valoracion', created.id);
        return created;
    }
    async put(req, valoracionDTO) {
        var _a;
        header_util_1.HeaderUtil.addEntityCreatedHeaders(req.res, 'Valoracion', valoracionDTO.id);
        return await this.valoracionService.update(valoracionDTO, (_a = req.user) === null || _a === void 0 ? void 0 : _a.login);
    }
    async putId(req, valoracionDTO) {
        var _a;
        header_util_1.HeaderUtil.addEntityCreatedHeaders(req.res, 'Valoracion', valoracionDTO.id);
        return await this.valoracionService.update(valoracionDTO, (_a = req.user) === null || _a === void 0 ? void 0 : _a.login);
    }
    async deleteById(req, id) {
        header_util_1.HeaderUtil.addEntityDeletedHeaders(req.res, 'Valoracion', id);
        return await this.valoracionService.deleteById(id);
    }
};
__decorate([
    common_1.Get('/'),
    security_1.Roles(security_1.RoleType.USER),
    swagger_1.ApiResponse({
        status: 200,
        description: 'List all records',
        type: getValoration_dto_1.GetValoracionDTO,
    }),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ValoracionController.prototype, "getAll", null);
__decorate([
    common_1.Get('/report' /* /:isForAttention   */),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiResponse({
        status: 200,
        description: 'Show report of valorations filtered by type',
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getValoration_dto_1.GetValoracionDTO /* @Param('isForAttention') isForAttention: string */]),
    __metadata("design:returntype", Promise)
], ValoracionController.prototype, "generateReport", null);
__decorate([
    common_1.Get('/:id'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiResponse({
        status: 200,
        description: 'The found record',
        type: valoracion_dto_1.ValoracionDTO,
    }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ValoracionController.prototype, "getOne", null);
__decorate([
    common_1.Post('/'),
    security_1.Roles(security_1.RoleType.USER),
    swagger_1.ApiOperation({ title: 'Create valoracion' }),
    swagger_1.ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: valoracion_dto_1.ValoracionDTO,
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, valoracion_dto_1.ValoracionDTO]),
    __metadata("design:returntype", Promise)
], ValoracionController.prototype, "post", null);
__decorate([
    common_1.Put('/'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiOperation({ title: 'Update valoracion' }),
    swagger_1.ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: valoracion_dto_1.ValoracionDTO,
    }),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, valoracion_dto_1.ValoracionDTO]),
    __metadata("design:returntype", Promise)
], ValoracionController.prototype, "put", null);
__decorate([
    common_1.Put('/:id'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiOperation({ title: 'Update valoracion with id' }),
    swagger_1.ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: valoracion_dto_1.ValoracionDTO,
    }),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, valoracion_dto_1.ValoracionDTO]),
    __metadata("design:returntype", Promise)
], ValoracionController.prototype, "putId", null);
__decorate([
    common_1.Delete('/:id'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiOperation({ title: 'Delete valoracion' }),
    swagger_1.ApiResponse({
        status: 204,
        description: 'The record has been successfully deleted.',
    }),
    __param(0, common_1.Req()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ValoracionController.prototype, "deleteById", null);
ValoracionController = __decorate([
    common_1.Controller('api/valorations')
    // @UseGuards(AuthGuard, RolesGuard)
    // @UseInterceptors(LoggingInterceptor, ClassSerializerInterceptor)
    // @ApiBearerAuth()
    ,
    swagger_1.ApiUseTags('valorations'),
    __metadata("design:paramtypes", [valoracion_service_1.ValoracionService])
], ValoracionController);
exports.ValoracionController = ValoracionController;
//# sourceMappingURL=valoracion.controller.js.map