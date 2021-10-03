import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { ValoracionDTO } from './dto/valoracion.dto';
import { ValoracionService } from './valoracion.service';
import { } from 'faker'
var faker = require('faker');

@Injectable()
export class TasksService {
    private readonly logger = new Logger(TasksService.name);

    constructor(private readonly valoracionService: ValoracionService) { }

    @Interval(1000)
    async handleInterval(): Promise<void> {

        let newValoration: ValoracionDTO = {
            estrellas: Math.floor(Math.random() * (6 - 1) + 1),
            descripcion: faker.lorem.sentences(),
            isForAttention: Math.random() < 0.5
        }

        // this.logger.log(newValoration);
        // await this.valoracionService.save(newValoration, "Faker");
    }



}