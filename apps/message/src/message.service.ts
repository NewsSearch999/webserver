import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MessageService {
  private readonly logger = new Logger(MessageService.name)

  message(data){
    this.logger.log('메시지큐...', data)
  }
}
