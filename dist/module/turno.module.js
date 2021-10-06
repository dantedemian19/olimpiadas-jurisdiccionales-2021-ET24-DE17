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
const turno_controller_1 = require("../web/rest/turno.controller");
const turno_repository_1 = require("../repository/turno.repository");
const turno_service_1 = require("../service/turno.service");
let TurnoModule = class TurnoModule {
};
TurnoModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([turno_repository_1.TurnoRepository])],
        controllers: [turno_controller_1.TurnoController],
        providers: [turno_service_1.TurnoService],
        exports: [turno_service_1.TurnoService],
    })
], TurnoModule);
exports.TurnoModule = TurnoModule;
//# sourceMappingURL=turno.module.js.map