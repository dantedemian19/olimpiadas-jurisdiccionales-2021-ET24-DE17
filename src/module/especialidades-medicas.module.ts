import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspecialidadesMedicasController } from '../web/rest/especialidades-medicas.controller';
import { EspecialidadesMedicasRepository } from '../repository/especialidades-medicas.repository';
import { EspecialidadesMedicasService } from '../service/especialidades-medicas.service';

@Module({
    imports: [TypeOrmModule.forFeature([EspecialidadesMedicasRepository])],
    controllers: [EspecialidadesMedicasController],
    providers: [EspecialidadesMedicasService],
    exports: [EspecialidadesMedicasService],
})
export class EspecialidadesMedicasModule {}
