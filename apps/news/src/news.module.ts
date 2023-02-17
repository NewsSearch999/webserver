import { DatabaseModule, RmqModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MESSAGE_SERVICE } from './constants/service'
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';
import { NewsController } from './news.controller';
import { NewsRepository } from './news.repository';
import { NewsService } from './news.service';
import { News, NewsSchema } from './schemas/news.schema';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: Joi.object({
      MONGODB_URI: Joi.string().required(),
      PORT: Joi.number().required()
    }),
    envFilePath: './apps/news/.env'
  }),
  DatabaseModule,
  MongooseModule.forFeature([{ name: News.name, schema: NewsSchema}]),
  RmqModule.register({
    name: MESSAGE_SERVICE
  })
],
  controllers: [NewsController],
  providers: [NewsService, NewsRepository],
})
export class NewsModule {}
