import { Module } from '@nestjs/common';
import { TasksService } from '../service/faker.service';
import { ValoracionModule } from './valoracion.module';
import { UserModule } from './user.module';
import { DiarioModule } from './diario.module';
import { TurnoModule } from './turno.module';
import { AuthModule } from './auth.module';
import { HistoriaClinicaModule } from './historia-clinica.module';
import { MedicoModule } from './medico.module';
import { PacienteModule } from './paciente.module';
import { CiudadModule } from './ciudad.module';

@Module({
    providers: [TasksService],
    imports: [
        ValoracionModule,
        UserModule,
        DiarioModule,
        TurnoModule,
        AuthModule,
        HistoriaClinicaModule,
        MedicoModule,
        PacienteModule,
        CiudadModule
    ],
})
export class FakerModule {}
