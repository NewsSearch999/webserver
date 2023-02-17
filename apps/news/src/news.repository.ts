import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";
import { News } from "./schemas/news.schema";

@Injectable()
export class NewsRepository extends AbstractRepository<News> {
    protected readonly logger = new Logger(NewsRepository.name);

    constructor(
        @InjectModel(News.name) newsModel: Model<News>,
        @InjectConnection() connection: Connection,
    ){
        super(newsModel, connection)
    }
}