import { Schema, Document, model } from "mongoose";

export interface IQuiz extends Document {
  question: string;
  duration: number;
  answer: string;
  point: number;
}

const QuizSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: false,
    },
    answer: {
      type: String,
      required: true,
    },
    point: {
      type: Number,
      default: 2,
    },
  },
  { versionKey: false, timestamps: true }
);

export const QuizModel = model<IQuiz>("quizs", QuizSchema);
