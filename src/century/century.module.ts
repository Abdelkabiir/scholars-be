import { Module } from '@nestjs/common';
import { CenturyService } from './century.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CenturyController } from './century.controller';
import { CenturySchema } from 'src/schemas/century.schema';

@Module({
  providers: [CenturyService],
  controllers: [CenturyController],
  imports: [
    MongooseModule.forFeature([{ name: 'Century', schema: CenturySchema }]),
  ],
})
export class CenturyModule {}
