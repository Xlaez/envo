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

  @IsString()
  answer: string;

  @IsNumber()
  @IsOptional()
  duration?: number;

  @IsNumber()
  point: number;
}
