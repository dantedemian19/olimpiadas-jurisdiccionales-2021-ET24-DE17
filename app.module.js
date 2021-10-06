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
const auth_module_1 = require("./module/auth.module");
const orm_config_1 = require("./orm.config");
const config_1 = require("./config");
const serve_static_1 = require("@nestjs/serve-static");
const paciente_module_1 = require("./module/paciente.module");
const medico_module_1 = require("./module/medico.module");
const especialidades_medicas_module_1 = require("./module/especialidades-medicas.module");
const turno_module_1 = require("./module/turno.module");
const historia_clinica_module_1 = require("./module/historia-clinica.module");
const diario_module_1 = require("./module/diario.module");
const valoracion_module_1 = require("./module/valoracion.module");
const faker_module_1 = require("./module/faker.module");
const mailer_1 = require("@nestjs-modules/mailer");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
// jhipster-needle-add-entity-module-to-main-import - JHipster will import entity modules here, do not remove
// jhipster-needle-add-controller-module-to-main-import - JHipster will import controller modules here, do not remove
// jhipster-needle-add-service-module-to-main-import - JHipster will import service modules here, do not remove
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({ useFactory: orm_config_1.ormConfig }),
            // ScheduleModule.forRoot(),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: config_1.config.getClientPath(),
            }),
            auth_module_1.AuthModule,
            paciente_module_1.PacienteModule,
            medico_module_1.MedicoModule,
            especialidades_medicas_module_1.EspecialidadesMedicasModule,
            turno_module_1.TurnoModule,
            historia_clinica_module_1.HistoriaClinicaModule,
            diario_module_1.DiarioModule,
            valoracion_module_1.ValoracionModule,
            faker_module_1.FakerModule,
        ],
        controllers: [
        // jhipster-needle-add-controller-module-to-main - JHipster will add controller modules here, do not remove
        ],
        providers: [
        // jhipster-needle-add-service-module-to-main - JHipster will add service modules here, do not remove
        ],
    }),
    common_1.Module({
        imports: [
            mailer_1.MailerModule.forRoot({
                transport: 'smtps://user@domain.com:pass@smtp.domain.com',
                defaults: {
                    from: '"nest-modules" <modules@nestjs.com>',
                },
                template: {
                    dir: __dirname + '/templates',
                    adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map