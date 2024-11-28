import { DolphControllerHandler } from "@dolphjs/dolph/classes";
import {
  Dolph,
  SuccessResponse,
  DRequest,
  DResponse,
  validateBodyMiddleware,
  TryCatchAsyncDec,
} from "@dolphjs/dolph/common";
import { Get, Post, Route, UseMiddleware } from "@dolphjs/dolph/decorators";
import { QuizService } from "./quiz.service";
import { AddQuestionDto } from "./quiz.dto";

@Route("quiz")
export class QuizController extends DolphControllerHandler<Dolph> {
  private QuizService: QuizService;
  constructor() {
    super();
  }

  @Get("greet")
  async greet(req: DRequest, res: DResponse) {
    SuccessResponse({
      res,
      body: { message: "you've reached the quiz endpoint." },
    });
  }

  @Post()
  @UseMiddleware(validateBodyMiddleware(AddQuestionDto))
  @TryCatchAsyncDec
  async createQuiz(req: DRequest, res: DResponse) {
    const quiz = await this.QuizService.addQuestion(req.body);

    SuccessResponse({ res, body: quiz });
  }
}
