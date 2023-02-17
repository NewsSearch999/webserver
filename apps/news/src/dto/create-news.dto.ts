import { IsString, IsNotEmpty } from 'class-validator'

export class CreateNewsDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    content: string;
}