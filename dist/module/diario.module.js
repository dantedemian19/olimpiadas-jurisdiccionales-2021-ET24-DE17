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
const diario_controller_1 = require("../web/rest/diario.controller");
const diario_repository_1 = require("../repository/diario.repository");
const diario_service_1 = require("../service/diario.service");
let DiarioModule = class DiarioModule {
};
DiarioModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([diario_repository_1.DiarioRepository])],
        controllers: [diario_controller_1.DiarioController],
        providers: [diario_service_1.DiarioService],
        exports: [diario_service_1.DiarioService],
    })
], DiarioModule);
exports.DiarioModule = DiarioModule;
//# sourceMappingURL=diario.module.js.map