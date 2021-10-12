import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinciaController } from '../web/rest/provincia.controller';
import { ProvinciaRepository } from '../repository/provincia.repository';
import { ProvinciaService } from '../service/provincia.service';
import { CiudadModule } from './ciudad.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProvinciaRepository]),
        CiudadModule
    ],
    controllers: [ProvinciaController],
    providers: [ProvinciaService],
    exports: [ProvinciaService],
})
export class ProvinciaModule {}
