import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({ versionKey: false })
export class News extends AbstractDocument {
    @Prop()
    title: string;

    @Prop()
    content: string;

}

export const NewsSchema = SchemaFactory.createForClass(News)