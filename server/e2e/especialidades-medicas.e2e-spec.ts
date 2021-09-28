import { Test, TestingModule } from '@nestjs/testing';
import request = require('supertest');
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { AuthGuard } from '../src/security/guards/auth.guard';
import { RolesGuard } from '../src/security/guards/roles.guard';
import { EspecialidadesMedicasDTO } from '../src/service/dto/especialidades-medicas.dto';
import { EspecialidadesMedicasService } from '../src/service/especialidades-medicas.service';

describe('EspecialidadesMedicas Controller', () => {
    let app: INestApplication;

    const authGuardMock = { canActivate: (): any => true };
    const rolesGuardMock = { canActivate: (): any => true };
    const entityMock: any = {
        id: 'entityId',
    };

    const serviceMock = {
        findById: (): any => entityMock,
        findAndCount: (): any => [entityMock, 0],
        save: (): any => entityMock,
        update: (): any => entityMock,
        deleteById: (): any => entityMock,
    };

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        })
            .overrideGuard(AuthGuard)
            .useValue(authGuardMock)
            .overrideGuard(RolesGuard)
            .useValue(rolesGuardMock)
            .overrideProvider(EspecialidadesMedicasService)
            .useValue(serviceMock)
            .compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/GET all especialidades-medicas ', async () => {
        const getEntities: EspecialidadesMedicasDTO[] = (
            await request(app.getHttpServer()).get('/api/especialidades-medicas').expect(200)
        ).body;

        expect(getEntities).toEqual(entityMock);
    });

    it('/GET especialidades-medicas by id', async () => {
        const getEntity: EspecialidadesMedicasDTO = (
            await request(app.getHttpServer())
                .get('/api/especialidades-medicas/' + entityMock.id)
                .expect(200)
        ).body;

        expect(getEntity).toEqual(entityMock);
    });

    it('/POST create especialidades-medicas', async () => {
        const createdEntity: EspecialidadesMedicasDTO = (
            await request(app.getHttpServer()).post('/api/especialidades-medicas').send(entityMock).expect(201)
        ).body;

        expect(createdEntity).toEqual(entityMock);
    });

    it('/PUT update especialidades-medicas', async () => {
        const updatedEntity: EspecialidadesMedicasDTO = (
            await request(app.getHttpServer()).put('/api/especialidades-medicas').send(entityMock).expect(201)
        ).body;

        expect(updatedEntity).toEqual(entityMock);
    });

    it('/PUT update especialidades-medicas from id', async () => {
        const updatedEntity: EspecialidadesMedicasDTO = (
            await request(app.getHttpServer())
                .put('/api/especialidades-medicas/' + entityMock.id)
                .send(entityMock)
                .expect(201)
        ).body;

        expect(updatedEntity).toEqual(entityMock);
    });

    it('/DELETE especialidades-medicas', async () => {
        const deletedEntity: EspecialidadesMedicasDTO = (
            await request(app.getHttpServer())
                .delete('/api/especialidades-medicas/' + entityMock.id)
                .expect(204)
        ).body;

        expect(deletedEntity).toEqual({});
    });

    afterEach(async () => {
        await app.close();
    });
});
