"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const valoracion_controller_1 = require("../web/rest/valoracion.controller");
const valoracion_repository_1 = require("../repository/valoracion.repository");
const valoracion_service_1 = require("../service/valoracion.service");
let ValoracionModule = class ValoracionModule {
};
ValoracionModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([valoracion_repository_1.ValoracionRepository])],
        controllers: [valoracion_controller_1.ValoracionController],
        providers: [valoracion_service_1.ValoracionService],
        exports: [valoracion_service_1.ValoracionService],
    })
], ValoracionModule);
exports.ValoracionModule = ValoracionModule;
//# sourceMappingURL=valoracion.module.js.map