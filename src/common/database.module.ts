import { Sample } from '@/entities/sample.entity';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (
        configService: ConfigService,
      ): Promise<TypeOrmModuleOptions> => {
        const systemConfig = configService.get('system');
        const databaseConfig = configService.get('database');
        const entities = [
          Sample
        ];

        return {
          type: 'mysql',
          host: databaseConfig.host,
          port: databaseConfig.port,
          username: databaseConfig.username,
          password: databaseConfig.password,
          database: databaseConfig.databaseName,
          logging: systemConfig.isLocal,
          synchronize: systemConfig.isLocal,
          namingStrategy: new SnakeNamingStrategy(),
          entities: entities,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
