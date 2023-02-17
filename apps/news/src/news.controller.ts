import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
 async createNews(@Body() createNewsDto: CreateNewsDto) {
  return this.newsService.createNews(createNewsDto);
 }

 @Get()
 async getNews(){
  return this.newsService.getNews();
 }
}
