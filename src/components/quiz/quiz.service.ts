import { DolphServiceHandler } from "@dolphjs/dolph/classes";
import { Dolph } from "@dolphjs/dolph/common";
import { InjectMongo } from "@dolphjs/dolph/decorators";
import { Model } from "mongoose";
import { QuizModel, IQuiz } from "./quiz.model";
import { AddQuestionDto } from "./quiz.dto";

@InjectMongo("quizModel", QuizModel)
export class QuizService extends DolphServiceHandler<Dolph> {
  quizModel!: Model<IQuiz>;

  constructor() {
    super("quizService");
  }

  async addQuestion(dto: AddQuestionDto) {
    return this.quizModel.create(dto);
  }

  async getQuestions(no: number) {
    const questions = await this.quizModel.find().limit(no);

    return questions;
  }

  async removeQuestion(id: string) {
    return this.quizModel.findByIdAndDelete(id);
  }
}
