import { model, Schema, Types } from "mongoose";

const StudentSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false }
);

export interface Student {
  _id: Types.ObjectId;
  name: String;
  firstname: String;
  age: Number;
}

export const StudentModel = model(
  "students",
  StudentSchema
);
