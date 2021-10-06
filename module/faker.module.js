"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const faker_service_1 = require("../service/faker.service");
const valoracion_module_1 = require("./valoracion.module");
const user_module_1 = require("./user.module");
const diario_module_1 = require("./diario.module");
const turno_module_1 = require("./turno.module");
const auth_module_1 = require("./auth.module");
const historia_clinica_module_1 = require("./historia-clinica.module");
const medico_module_1 = require("./medico.module");
const paciente_module_1 = require("./paciente.module");
let FakerModule = class FakerModule {
};
FakerModule = __decorate([
    common_1.Module({
        providers: [faker_service_1.TasksService],
        imports: [
            valoracion_module_1.ValoracionModule,
            user_module_1.UserModule,
            diario_module_1.DiarioModule,
            turno_module_1.TurnoModule,
            auth_module_1.AuthModule,
            historia_clinica_module_1.HistoriaClinicaModule,
            medico_module_1.MedicoModule,
            paciente_module_1.PacienteModule,
        ],
    })
], FakerModule);
exports.FakerModule = FakerModule;
//# sourceMappingURL=faker.module.js.map