//Nest
import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';

//Services
import { ValoracionService } from './valoracion.service';
import { UserService } from './user.service';
import { TurnoService } from './turno.service';
import { DiarioService } from './diario.service';
import { AuthService } from './auth.service';
import { HistoriaClinicaService } from './historia-clinica.service';

//DTOs
import { ValoracionDTO } from './dto/valoracion.dto';
import { DiarioDTO } from './dto/diario.dto';
import { TurnoDTO } from './dto/turno.dto';
import { UserDTO } from './dto/user.dto';
import { HistoriaClinicaDTO } from './dto/historia-clinica.dto';

//Enums
import { SintomasTipo } from "../domain/enumeration/Sintomas-Tipo";
import { TurnoEstado } from '../domain/enumeration/TurnoEstado';
import { RoleType } from '../security/role-type-faker';
import { Categoria } from '../domain/enumeration/categoria';

var faker = require('faker');

@Injectable()
export class TasksService {

    private readonly logger = new Logger(TasksService.name);

    constructor(
        private readonly valoracionService: ValoracionService,
        private readonly userService: UserService,
        private readonly diarioService: DiarioService,
        private readonly turnoService: TurnoService,
        private readonly authService: AuthService,
        private readonly historiaClinicaService: HistoriaClinicaService
    ) {
    }

    @Interval(90000)
    async fakeValoracion(): Promise<void> {
        // this.logger.debug("Fake valoration created");
        let newValoration: ValoracionDTO = {
            estrellas: Math.floor(Math.random() * (6 - 1) + 1),
            descripcion: faker.lorem.sentences(),
            isForAttention: Math.random() < 0.5
        }
        await this.valoracionService.save(newValoration, "Faker");
    }

    @Interval(40000)
    async fakeDiario(): Promise<void> {
        // this.logger.debug("Fake diario created");
        let randomPaciente = await this.userService.getRandomUser();

        let newDiario: DiarioDTO = {
            entrada: faker.lorem.text(),
            fecha: Date(),
            paciente: randomPaciente.id.toString(),
            sintomas: this.randomElementOfEnum(SintomasTipo)
        }
        await this.diarioService.save(newDiario, "Faker");
    }

    @Interval(80000)
    async fakeTurno(): Promise<void> {
        // this.logger.debug("Fake turno created");
        let randomPaciente = await this.userService.getRandomUser({
            where: {
                "authorities": {
                    $all: [{
                        "name": "ROLE_PACIENTE"
                    }]
                }
            }
        });

        let newTurno: TurnoDTO = {
            descripcion: faker.lorem.text(),
            fechaHora: faker.date.future(),
            estado: this.randomElementOfEnum(TurnoEstado),
            motivo: faker.lorem.text(),
            paciente: randomPaciente.id.toString()
        }

        await this.turnoService.save(newTurno, "Faker");
    }

    @Interval(30000)
    async fakeHistoriaClinica(): Promise<void> {
        // this.logger.debug("Fake historia clinica created");
        const randomPaciente = await this.userService.getRandomUser({
            where: {
                "authorities": {
                    $all: [{
                        "name": "ROLE_PACIENTE"
                    }]
                }
            }
        });


        const randomMedico = await this.userService.getRandomUser({
            where: {
                "authorities": {
                    $all: [{
                        "name": "ROLE_MEDICO"
                    }]
                }
            }
        });

        let newHistoriaClinica: HistoriaClinicaDTO = {
            categoria: this.randomElementOfEnum(Categoria),
            diagnostico: faker.lorem.paragraph(),
            fecha: Date(),
            medico: randomMedico.id.toString(),
            tratamiento: faker.lorem.paragraph(),
            paciente: randomPaciente.id.toString()
        }

        await this.historiaClinicaService.save(newHistoriaClinica, "Faker");
    }

    @Interval(120000)
    async fakeUsers(): Promise<void> {
        // this.logger.debug("Fake user created");
        let aleatoryRol = this.randomElementOfEnum(RoleType);

        var userAuthorities: RoleType[];

        if (aleatoryRol == RoleType.PACIENTE || aleatoryRol == RoleType.USER) {
            userAuthorities = [RoleType.PACIENTE, RoleType.USER];
        } else {
            userAuthorities = [RoleType.MEDICO];
        }

        let newUserInfo: UserDTO = {
            email: faker.internet.email(),
            login: faker.name.findName(),
            password: faker.internet.password(),
            activated: true,
            authorities: userAuthorities
        }
        await this.authService.registerNewUser(newUserInfo);
    }

    randomElementOfEnum<T>(anEnum: T): T[keyof T] {
        const enumValues = (Object.values(anEnum) as unknown) as T[keyof T][];
        const randomIndex = Math.floor(Math.random() * enumValues.length);
        return enumValues[randomIndex];
    }

}