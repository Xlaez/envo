import { Schema, Document, model } from "mongoose";

export interface IQuiz extends Document {
  question: string;
  duration: number;
  options: string[];
  answer: number;
  point: number;
}

const QuizSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  options: [String],
  answer: {
    type: Number,
    required: true,
  },
  point: {
    type: Number,
    default: 2,
  },
});

export const QuizModel = model<IQuiz>("quizs", QuizSchema);
