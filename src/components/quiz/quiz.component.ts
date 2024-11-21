import { Component } from "@dolphjs/dolph/decorators";
import { QuizController } from "./quiz.controller";

@Component({ controllers: [QuizController], services: [] })
export class QuizComponent {}
