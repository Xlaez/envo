import { Schema, Document, model } from "mongoose";

export interface IAccount extends Document {
  phone: string;
  noOfStarWins: number;
}

const AccountSchema = new Schema(
  {
    phone: {
      type: String,
      required: true,
    },
    noOfStarWins: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const AccountModel = model<IAccount>("accounts", AccountSchema);
