import { Test, TestingModule } from '@nestjs/testing';
import request = require('supertest');
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { AuthGuard } from '../src/security/guards/auth.guard';
import { RolesGuard } from '../src/security/guards/roles.guard';
import { ProvinciaDTO } from '../src/service/dto/provincia.dto';
import { ProvinciaService } from '../src/service/provincia.service';

describe('Provincia Controller', () => {
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
            .overrideProvider(ProvinciaService)
            .useValue(serviceMock)
            .compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/GET all provincias ', async () => {
        const getEntities: ProvinciaDTO[] = (await request(app.getHttpServer()).get('/api/provincias').expect(200))
            .body;

        expect(getEntities).toEqual(entityMock);
    });

    it('/GET provincias by id', async () => {
        const getEntity: ProvinciaDTO = (
            await request(app.getHttpServer())
                .get('/api/provincias/' + entityMock.id)
                .expect(200)
        ).body;

        expect(getEntity).toEqual(entityMock);
    });

    it('/POST create provincias', async () => {
        const createdEntity: ProvinciaDTO = (
            await request(app.getHttpServer()).post('/api/provincias').send(entityMock).expect(201)
        ).body;

        expect(createdEntity).toEqual(entityMock);
    });

    it('/PUT update provincias', async () => {
        const updatedEntity: ProvinciaDTO = (
            await request(app.getHttpServer()).put('/api/provincias').send(entityMock).expect(201)
        ).body;

        expect(updatedEntity).toEqual(entityMock);
    });

    it('/PUT update provincias from id', async () => {
        const updatedEntity: ProvinciaDTO = (
            await request(app.getHttpServer())
                .put('/api/provincias/' + entityMock.id)
                .send(entityMock)
                .expect(201)
        ).body;

        expect(updatedEntity).toEqual(entityMock);
    });

    it('/DELETE provincias', async () => {
        const deletedEntity: ProvinciaDTO = (
            await request(app.getHttpServer())
                .delete('/api/provincias/' + entityMock.id)
                .expect(204)
        ).body;

        expect(deletedEntity).toEqual({});
    });

    afterEach(async () => {
        await app.close();
    });
});
