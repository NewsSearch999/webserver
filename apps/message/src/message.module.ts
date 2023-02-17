import { RmqModule } from '@app/common/rmq/rmq.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import * as Joi from 'joi'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_MESSAGE_QUEUE : Joi.string().required()
      })
    }),
    RmqModule
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
