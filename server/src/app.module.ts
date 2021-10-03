import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './module/auth.module';
import { ormConfig } from './orm.config';
import { config } from './config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PacienteModule } from './module/paciente.module';
import { MedicoModule } from './module/medico.module';
import { EspecialidadesMedicasModule } from './module/especialidades-medicas.module';
import { TurnoModule } from './module/turno.module';
import { HistoriaClinicaModule } from './module/historia-clinica.module';
import { DiarioModule } from './module/diario.module';
import { ValoracionModule } from './module/valoracion.module';
import { FakerModule } from './module/faker.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

// jhipster-needle-add-entity-module-to-main-import - JHipster will import entity modules here, do not remove
// jhipster-needle-add-controller-module-to-main-import - JHipster will import controller modules here, do not remove
// jhipster-needle-add-service-module-to-main-import - JHipster will import service modules here, do not remove

@Module({
    imports: [
        TypeOrmModule.forRootAsync({ useFactory: ormConfig }),
        // ScheduleModule.forRoot(),
        ServeStaticModule.forRoot({
            rootPath: config.getClientPath(),
        }),
        AuthModule,
        PacienteModule,
        MedicoModule,
        EspecialidadesMedicasModule,
        TurnoModule,
        HistoriaClinicaModule,
        DiarioModule,
        ValoracionModule,
        FakerModule,
        // jhipster-needle-add-entity-module-to-main - JHipster will add entity modules here, do not remove
    ],
    controllers: [
        // jhipster-needle-add-controller-module-to-main - JHipster will add controller modules here, do not remove
    ],
    providers: [
        // jhipster-needle-add-service-module-to-main - JHipster will add service modules here, do not remove
    ],
})
@Module({
    imports: [
        MailerModule.forRoot({
            transport: 'smtps://user@domain.com:pass@smtp.domain.com',
            defaults: {
                from: '"nest-modules" <modules@nestjs.com>',
            },
            template: {
                dir: __dirname + '/templates',
                adapter: new HandlebarsAdapter(),
                options: {
                    strict: true,
                },
            },
        }),
    ],
})
export class AppModule {}
