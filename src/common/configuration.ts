import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export type Config = {
  server: {
    host: string;
    port: string;
  };
  system: {
    isLocal: boolean;
    isDev: boolean;
    isStg: boolean;
    isPrd: boolean;
  };
  database: {
    host: string;
    type: TypeOrmModuleOptions['type'];
    port: number;
    username: string;
    password: string;
    databaseName: string;
  };
};

export default () =>
  ({
    server: {
      host: process.env.SERVER_HOST || 'localhost',
      port: process.env.SERVER_PORT || '3000',
    },
    system: {
      isLocal: process.env.SERVER_HOST === 'localhost',
      isDev: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
      isStg: process.env.NODE_ENV === 'staging',
      isPrd: process.env.NODE_ENV === 'production',
    },
    database: {
      host: process.env.DB_HOST || 'localhost',
      type: 'mysql',
      port: parseInt(process.env.DB_PORT || '3306', 10),
      username: process.env.DB_USERNAME || 'username',
      password: process.env.DB_PASSWORD || 'password',
      databaseName: process.env.DB_DATABASE_NAME || 'databas_name',
    },
  } as Config);
