import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadController } from '../web/rest/ciudad.controller';
import { CiudadRepository } from '../repository/ciudad.repository';
import { ciudadeservice } from '../service/ciudad.service';
import { TurnoModule } from './turno.module';
import { MedicoModule } from './medico.module';
import { HistoriaClinicaModule } from './historia-clinica.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([CiudadRepository]),
        TurnoModule,
        MedicoModule,
        HistoriaClinicaModule
    ],
    controllers: [CiudadController],
    providers: [ciudadeservice],
    exports: [ciudadeservice],
})
export class CiudadModule {}
