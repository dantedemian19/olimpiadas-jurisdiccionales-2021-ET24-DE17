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
var TasksService_1;
Object.defineProperty(exports, "__esModule", { value: true });
// Nest
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
// Services
const valoracion_service_1 = require("./valoracion.service");
const user_service_1 = require("./user.service");
const turno_service_1 = require("./turno.service");
const diario_service_1 = require("./diario.service");
const auth_service_1 = require("./auth.service");
const historia_clinica_service_1 = require("./historia-clinica.service");
// Enums
const especialidades_tipo_1 = require("../../src/domain/enumeration/especialidades-tipo");
const Sintomas_Tipo_1 = require("../domain/enumeration/Sintomas-Tipo");
const TurnoEstado_1 = require("../domain/enumeration/TurnoEstado");
const role_type_faker_1 = require("../security/role-type-faker");
const categoria_1 = require("../domain/enumeration/categoria");
const medico_service_1 = require("./medico.service");
const paciente_service_1 = require("./paciente.service");
const faker = require('faker');
let TasksService = TasksService_1 = class TasksService {
    constructor(valoracionService, userService, diarioService, turnoService, authService, historiaClinicaService, medicoService, pacienteService) {
        this.valoracionService = valoracionService;
        this.userService = userService;
        this.diarioService = diarioService;
        this.turnoService = turnoService;
        this.authService = authService;
        this.historiaClinicaService = historiaClinicaService;
        this.medicoService = medicoService;
        this.pacienteService = pacienteService;
        this.logger = new common_1.Logger(TasksService_1.name);
    }
    async fakeValoracion() {
        // this.logger.debug("Fake valoration created");
        const newValoration = {
            estrellas: Math.floor(Math.random() * (6 - 1) + 1),
            descripcion: faker.lorem.sentences(),
            isForAttention: Math.random() < 0.5,
        };
        await this.valoracionService.save(newValoration, 'Faker');
    }
    async fakeDiario() {
        // this.logger.debug("Fake diario created");
        const randomPaciente = await this.userService.getRandomUser();
        const newDiario = {
            entrada: faker.lorem.text(),
            fecha: Date(),
            paciente: randomPaciente.id.toString(),
            sintomas: this.randomElementOfEnum(Sintomas_Tipo_1.SintomasTipo),
        };
        await this.diarioService.save(newDiario, 'Faker');
    }
    async fakeTurno() {
        // this.logger.debug("Fake turno created");
        const randomPaciente = await this.userService.getRandomUser({
            where: {
                authorities: {
                    $all: [
                        {
                            name: 'ROLE_PACIENTE',
                        },
                    ],
                },
            },
        });
        const newTurno = {
            descripcion: faker.lorem.text(),
            fechaHora: faker.date.future(),
            estado: this.randomElementOfEnum(TurnoEstado_1.TurnoEstado),
            motivo: faker.lorem.text(),
            paciente: randomPaciente.id.toString(),
        };
        await this.turnoService.save(newTurno, 'Faker');
    }
    async fakeHistoriaClinica() {
        // this.logger.debug("Fake historia clinica created");
        const randomPaciente = await this.userService.getRandomUser({
            where: {
                authorities: {
                    $all: [
                        {
                            name: 'ROLE_PACIENTE',
                        },
                    ],
                },
            },
        });
        const randomMedico = await this.userService.getRandomUser({
            where: {
                authorities: {
                    $all: [
                        {
                            name: 'ROLE_MEDICO',
                        },
                    ],
                },
            },
        });
        const newHistoriaClinica = {
            categoria: this.randomElementOfEnum(categoria_1.Categoria),
            diagnostico: faker.lorem.paragraph(),
            fecha: Date(),
            medico: randomMedico.id.toString(),
            tratamiento: faker.lorem.paragraph(),
            paciente: randomPaciente.id.toString(),
        };
        await this.historiaClinicaService.save(newHistoriaClinica, 'Faker');
    }
    async fakeUsers() {
        // this.logger.debug("Fake user created");
        const aleatoryRol = this.randomElementOfEnum(role_type_faker_1.RoleType);
        let userAuthorities;
        let userEntity;
        if (aleatoryRol == role_type_faker_1.RoleType.PACIENTE || aleatoryRol == role_type_faker_1.RoleType.USER) {
            userAuthorities = [role_type_faker_1.RoleType.PACIENTE, role_type_faker_1.RoleType.USER];
            const newPaciente = {
                apellido: faker.name.lastName(),
                nombre: faker.name.lastName(),
                dni: Math.floor(Math.random() * (54000000 - 50000000)) + 50000000,
                mail: faker.internet.email(),
                telefono: faker.phone.phoneNumber(),
            };
            userEntity = newPaciente;
            let result = await this.pacienteService.save(newPaciente, 'Faker');
            this.logger.debug(result);
        }
        else {
            userAuthorities = [role_type_faker_1.RoleType.MEDICO];
            const newMedico = {
                apellido: faker.name.lastName(),
                nombre: faker.name.lastName(),
                dni: Math.floor(Math.random() * (54000000 - 50000000)) + 50000000,
                mail: faker.internet.email(),
                telefono: faker.phone.phoneNumber(),
                atiendeDiscapacitados: Math.random() > 0.5,
                especialidad: this.randomElementOfEnum(especialidades_tipo_1.EspecialidadesTipo),
                matricula: faker.phone.phoneNumber(),
            };
            userEntity = newMedico;
            await this.medicoService.save(newMedico, 'Faker');
        }
        const newUserInfo = {
            email: userEntity.mail,
            login: faker.name.findName(),
            password: faker.internet.password(),
            activated: true,
            authorities: userAuthorities,
        };
        await this.authService.registerNewUser(newUserInfo);
    }
    randomElementOfEnum(anEnum) {
        const enumValues = Object.values(anEnum);
        const randomIndex = Math.floor(Math.random() * enumValues.length);
        return enumValues[randomIndex];
    }
};
__decorate([
    schedule_1.Interval(90000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "fakeValoracion", null);
__decorate([
    schedule_1.Interval(40000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "fakeDiario", null);
__decorate([
    schedule_1.Interval(80000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "fakeTurno", null);
__decorate([
    schedule_1.Interval(30000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "fakeHistoriaClinica", null);
__decorate([
    schedule_1.Interval(100),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "fakeUsers", null);
TasksService = TasksService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [valoracion_service_1.ValoracionService,
        user_service_1.UserService,
        diario_service_1.DiarioService,
        turno_service_1.TurnoService,
        auth_service_1.AuthService,
        historia_clinica_service_1.HistoriaClinicaService,
        medico_service_1.MedicoService,
        paciente_service_1.PacienteService])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=faker.service.js.map