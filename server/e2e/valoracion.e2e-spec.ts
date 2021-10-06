import { Test, TestingModule } from '@nestjs/testing';
import request = require('supertest');
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { AuthGuard } from '../src/security/guards/auth.guard';
import { RolesGuard } from '../src/security/guards/roles.guard';
import { ValoracionDTO } from '../src/service/dto/valoracion.dto';
import { ValoracionService } from '../src/service/valoracion.service';

describe('Valoracion Controller', () => {
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
            .overrideProvider(ValoracionService)
            .useValue(serviceMock)
            .compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/GET all valoracions ', async () => {
        const getEntities: ValoracionDTO[] = (
            await request(app.getHttpServer())
                .get('/api/valoracions')
                .expect(200)
        ).body;

        expect(getEntities).toEqual(entityMock);
    });

    it('/GET valoracions by id', async () => {
        const getEntity: ValoracionDTO = (
            await request(app.getHttpServer())
                .get('/api/valoracions/' + entityMock.id)
                .expect(200)
        ).body;

        expect(getEntity).toEqual(entityMock);
    });

    it('/POST create valoracions', async () => {
        const createdEntity: ValoracionDTO = (
            await request(app.getHttpServer())
                .post('/api/valoracions')
                .send(entityMock)
                .expect(201)
        ).body;

        expect(createdEntity).toEqual(entityMock);
    });

    it('/PUT update valoracions', async () => {
        const updatedEntity: ValoracionDTO = (
            await request(app.getHttpServer())
                .put('/api/valoracions')
                .send(entityMock)
                .expect(201)
        ).body;

        expect(updatedEntity).toEqual(entityMock);
    });

    it('/PUT update valoracions from id', async () => {
        const updatedEntity: ValoracionDTO = (
            await request(app.getHttpServer())
                .put('/api/valoracions/' + entityMock.id)
                .send(entityMock)
                .expect(201)
        ).body;

        expect(updatedEntity).toEqual(entityMock);
    });

    it('/DELETE valoracions', async () => {
        const deletedEntity: ValoracionDTO = (
            await request(app.getHttpServer())
                .delete('/api/valoracions/' + entityMock.id)
                .expect(204)
        ).body;

        expect(deletedEntity).toEqual({});
    });

    afterEach(async () => {
        await app.close();
    });
});
