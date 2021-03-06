// Nest
import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';

// Services
import { ValoracionService } from './valoracion.service';
import { UserService } from './user.service';
import { TurnoService } from './turno.service';
import { DiarioService } from './diario.service';
import { AuthService } from './auth.service';
import { HistoriaClinicaService } from './historia-clinica.service';
import { MedicoService } from './medico.service';
import { PacienteService } from './paciente.service';
import { ciudadeservice } from './ciudad.service';

// DTOs
import { ValoracionDTO } from './dto/valoracion.dto';
import { DiarioDTO } from './dto/diario.dto';
import { TurnoDTO } from './dto/turno.dto';
import { UserDTO } from './dto/user.dto';
import { HistoriaClinicaDTO } from './dto/historia-clinica.dto';
import { MedicoDTO } from './dto/medico.dto';
import { PacienteDTO } from './dto/paciente.dto';

// Enums
import { EspecialidadesTipo } from '../../src/domain/enumeration/especialidades-tipo';
import { SintomasTipo } from '../domain/enumeration/Sintomas-Tipo';
import { TurnoEstado } from '../domain/enumeration/TurnoEstado';
import { RoleType } from '../security/role-type-faker';
import { Categoria } from '../domain/enumeration/categoria';


const faker = require('faker');

@Injectable()
export class TasksService {
    private readonly logger = new Logger(TasksService.name);

    constructor(
        private readonly valoracionService: ValoracionService,
        private readonly userService: UserService,
        private readonly diarioService: DiarioService,
        private readonly turnoService: TurnoService,
        private readonly authService: AuthService,
        private readonly historiaClinicaService: HistoriaClinicaService,
        private readonly medicoService: MedicoService,
        private readonly pacienteService: PacienteService,
        private readonly ciudadService: ciudadeservice
    ) { }

    // @Interval(90000)
    async fakeValoracion(): Promise<void> {
        // this.logger.debug("Fake valoration created");
        const newValoration: ValoracionDTO = {
            estrellas: Math.floor(Math.random() * (6 - 1) + 1),
            descripcion: faker.lorem.sentences(),
            isForAttention: Math.random() < 0.5,
        };
        await this.valoracionService.save(newValoration, 'Faker');
    }

    // @Interval(40000)
    async fakeDiario(): Promise<void> {
        // this.logger.debug("Fake diario created");
        const randomPaciente = await this.userService.getRandomUser();

        const newDiario: DiarioDTO = {
            entrada: faker.lorem.text(),
            fecha: Date(),
            paciente: randomPaciente.id.toString(),
            sintomas: this.randomElementOfEnum(SintomasTipo),
        };
        await this.diarioService.save(newDiario, 'Faker');
    }

    @Interval(1000)
    async fakeTurno(): Promise<void> {
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

        const newTurno: TurnoDTO = {
            descripcion: faker.lorem.text(),
            fechaHora: faker.date.future(),
            estado: this.randomElementOfEnum(TurnoEstado),
            motivo: faker.lorem.text(),
            paciente: randomPaciente.id.toString(),
        };

        await this.turnoService.save(newTurno, 'Faker');
    }

    // @Interval(100)
    async fakeHistoriaClinica(): Promise<void> {
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

        const randomHistoriaClinica = await this.turnoService.getRandomTurno();

        const newHistoriaClinica: HistoriaClinicaDTO = {
            categoria: this.randomElementOfEnum(Categoria),
            diagnostico: faker.lorem.paragraph(),
            fecha: Date(),
            tratamiento: faker.lorem.paragraph(),
            id_medico: randomMedico.id.toString(),
            id_paciente: randomPaciente.id.toString(),
            id_turno: randomHistoriaClinica.id.toString(),
            sintoma: null
        };

        await this.historiaClinicaService.save(newHistoriaClinica, 'Faker');
    }

    // @Interval(10000)
    async fakeUsers(): Promise<void> {
        // this.logger.debug("Fake user created");
        const aleatoryRol = this.randomElementOfEnum(RoleType);

        let userAuthorities: RoleType[];

        let userEntity: PacienteDTO | MedicoDTO;

        if (aleatoryRol == RoleType.PACIENTE || aleatoryRol == RoleType.USER) {
            userAuthorities = [RoleType.PACIENTE, RoleType.USER];
            const newPaciente: PacienteDTO = {
                apellido: faker.name.lastName(),
                nombre: faker.name.lastName(),
                dni: Math.floor(Math.random() * (54000000 - 50000000)) + 50000000,
                mail: faker.internet.email(),
                telefono: faker.phone.phoneNumber(),
            };
            userEntity = newPaciente;

            let result = await this.pacienteService.save(newPaciente, 'Faker');

            this.logger.debug(result)
        } else {
            userAuthorities = [RoleType.MEDICO];

            const randomCity = await this.ciudadService.getRandomCity();

            const newMedico: MedicoDTO = {
                apellido: faker.name.lastName(),
                nombre: faker.name.lastName(),
                dni: Math.floor(Math.random() * (54000000 - 50000000)) + 50000000,
                mail: faker.internet.email(),
                telefono: faker.phone.phoneNumber(),
                atiendeDiscapacitados: Math.random() > 0.5,
                especialidad: this.randomElementOfEnum(EspecialidadesTipo),
                matricula: faker.phone.phoneNumber(),
                ciudadId: randomCity.id.toString(),
                provinciaId: randomCity.provinciaId
            };
            userEntity = newMedico;
            await this.medicoService.save(newMedico, 'Faker');
        }

        const newUserInfo: UserDTO = {
            email: userEntity.mail,
            login: faker.name.findName(),
            password: faker.internet.password(),
            activated: true,
            authorities: userAuthorities,
        };
        await this.authService.registerNewUser(newUserInfo);
    }

    randomElementOfEnum<T>(anEnum: T): T[keyof T] {
        const enumValues = (Object.values(anEnum) as unknown) as T[keyof T][];
        const randomIndex = Math.floor(Math.random() * enumValues.length);
        return enumValues[randomIndex];
    }
}
