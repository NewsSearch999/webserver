import { RmqService } from '@app/common/rmq/rmq.service';
import { Controller, Get } from '@nestjs/common';
import { EventPattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';
import { MessageService } from './message.service';

@Controller()
export class MessageController {
  constructor(private readonly messageService: MessageService,
    private readonly rmqService: RmqService,
    ) {}

  @EventPattern('news_created')
  async handleNewsCreated(@Payload() data: any, @Ctx() context: RmqContext) {

    this.messageService.message(data);
    this.rmqService.ack(context);
  }
}
