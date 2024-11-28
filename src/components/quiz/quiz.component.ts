import { Component } from "@dolphjs/dolph/decorators";
import { QuizController } from "./quiz.controller";
import { QuizService } from "./quiz.service";

@Component({ controllers: [QuizController], services: [QuizService] })
export class QuizComponent {}
