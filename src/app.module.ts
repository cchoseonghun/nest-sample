import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './common/configuration';
import { DatabaseModule } from './common/database.module';
import { SampleModule } from './biz/sample/sample.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env`],
      isGlobal: true,
      load: [configuration],
    }),
    DatabaseModule,
    SampleModule,
  ],
})
export class AppModule {}
