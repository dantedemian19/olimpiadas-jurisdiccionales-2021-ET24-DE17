import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValoracionController } from '../web/rest/valoracion.controller';
import { ValoracionRepository } from '../repository/valoracion.repository';
import { ValoracionService } from '../service/valoracion.service';

@Module({
    imports: [TypeOrmModule.forFeature([ValoracionRepository])],
    controllers: [ValoracionController],
    providers: [ValoracionService],
    exports: [ValoracionService],
})
export class ValoracionModule {}
