import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { MESSAGE_SERVICE } from './constants/service';
import { NewsRepository } from './news.repository';

@Injectable()
export class NewsService {
  constructor(
    private readonly newsRepository: NewsRepository,

    //RMQ와 실제로 연결되는 부분
    @Inject(MESSAGE_SERVICE) private messageClient: ClientProxy,
  ){}

  async createNews(request){
    const session = await this.newsRepository.startTransaction();
    try {
      const order = await this.newsRepository.create(request, { session });
      await lastValueFrom(
        this.messageClient.emit('news_created', {
          request
        }),
      );
      await session.commitTransaction();
      return order;
    } catch (err) {
      await session.abortTransaction();
      throw err;
    }
  }

  async getNews(){
    return this.newsRepository.find({})
  }
}
