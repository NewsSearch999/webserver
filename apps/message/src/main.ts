import { RmqService } from '@app/common/rmq/rmq.service';
import { NestFactory } from '@nestjs/core';
import { MessageModule } from './message.module';

async function bootstrap() {
  const app = await NestFactory.create(MessageModule);
  const rmqService = app.get<RmqService>(RmqService)
  app.connectMicroservice(rmqService.getOptions('MESSAGE'))
  await app.startAllMicroservices()
}
bootstrap();
