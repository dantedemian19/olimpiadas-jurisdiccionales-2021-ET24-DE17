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
const especialidades_medicas_controller_1 = require("../web/rest/especialidades-medicas.controller");
const especialidades_medicas_repository_1 = require("../repository/especialidades-medicas.repository");
const especialidades_medicas_service_1 = require("../service/especialidades-medicas.service");
let EspecialidadesMedicasModule = class EspecialidadesMedicasModule {
};
EspecialidadesMedicasModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([especialidades_medicas_repository_1.EspecialidadesMedicasRepository])],
        controllers: [especialidades_medicas_controller_1.EspecialidadesMedicasController],
        providers: [especialidades_medicas_service_1.EspecialidadesMedicasService],
        exports: [especialidades_medicas_service_1.EspecialidadesMedicasService],
    })
], EspecialidadesMedicasModule);
exports.EspecialidadesMedicasModule = EspecialidadesMedicasModule;
//# sourceMappingURL=especialidades-medicas.module.js.map