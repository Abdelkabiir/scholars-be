import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConnectionParams } from './utils/constants';
import { CenturyModule } from './century/century.module';

@Module({
  imports: [
    MongooseModule.forRoot(`${ConnectionParams.Url}${ConnectionParams.DataBaseName}`, { useNewUrlParser: true }),
    CenturyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
