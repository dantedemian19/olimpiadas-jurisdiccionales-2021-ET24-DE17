import { Module } from '@nestjs/common';
import { ValoracionService } from '../service/valoracion.service';
import { TasksService } from '../service/faker.service';
import { ValoracionModule } from './valoracion.module';

@Module({
  providers: [
      TasksService
    ],
    imports: [
        ValoracionModule
    ]
})
export class FakerModule {}
