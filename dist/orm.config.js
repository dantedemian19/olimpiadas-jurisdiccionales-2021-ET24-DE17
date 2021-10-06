"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_memory_server_1 = require("mongodb-memory-server");
async function ormConfig() {
    let mongod;
    if (process.env.BACKEND_ENV !== 'prod') {
        mongod = await mongodb_memory_server_1.MongoMemoryServer.create();
    }
    const commonConf = {
        SYNCRONIZE: false,
        ENTITIES: [__dirname + '/domain/*.entity{.ts,.js}'],
        MIGRATIONS: [__dirname + '/migrations/**/*{.ts,.js}'],
        CLI: {
            migrationsDir: 'src/migrations',
        },
        MIGRATIONS_RUN: true,
    };
    let ormconfig = {
        name: 'default',
        type: 'mongodb',
        host: 'localhost',
        port: mongod ? await mongod.getPort() : 0,
        database: mongod ? await mongod.getDbName() : 'dev',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        logging: true,
        synchronize: true,
        entities: commonConf.ENTITIES,
        migrations: commonConf.MIGRATIONS,
        cli: commonConf.CLI,
        migrationsRun: commonConf.MIGRATIONS_RUN,
    };
    if (process.env.BACKEND_ENV === 'prod') {
        ormconfig = {
            name: 'default',
            type: 'mongodb',
            database: process.env.DB_NAME,
            host: process.env.DB_CON,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            logging: false,
            synchronize: commonConf.SYNCRONIZE,
            entities: commonConf.ENTITIES,
            migrations: commonConf.MIGRATIONS,
            cli: commonConf.CLI,
            migrationsRun: commonConf.MIGRATIONS_RUN,
        };
    }
    if (process.env.BACKEND_ENV === 'test') {
        ormconfig = {
            name: 'default',
            type: 'mongodb',
            host: 'localhost',
            port: await mongod.getPort(),
            database: await mongod.getDbName(),
            useNewUrlParser: true,
            useUnifiedTopology: true,
            keepConnectionAlive: true,
            logging: true,
            synchronize: true,
            entities: commonConf.ENTITIES,
            migrations: commonConf.MIGRATIONS,
            cli: commonConf.CLI,
            migrationsRun: commonConf.MIGRATIONS_RUN,
        };
    }
    return ormconfig;
}
exports.ormConfig = ormConfig;
//# sourceMappingURL=orm.config.js.map