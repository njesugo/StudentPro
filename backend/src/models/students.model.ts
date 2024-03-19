import { model, Schema, Model, Types, Document } from "mongoose";

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

export interface IIStudent {
  _id: Types.ObjectId;
  name: String;
  firstname: String;
  age: Number;
}
export interface IStudent extends Omit<IIStudent, "_id">, Document {}

export const Student = model<IStudent, Model<IStudent>>(
  "Student",
  StudentSchema,
  "students"
);