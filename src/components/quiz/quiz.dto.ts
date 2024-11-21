import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export class AddQuestionDto {
  @IsString()
  @IsNotEmpty()
  question: string;

  @IsNumber()
  answer: number;

  @IsNumber()
  @IsOptional()
  duration?: number;

  @IsArray()
  options: [string];

  @IsNumber()
  point: number;
}
