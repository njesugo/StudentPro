import { Types } from "mongoose";
import { Student, StudentModel } from "../models/students.model";

const getStudents = async () => {
  return await StudentModel.find();
};

const getStudent = async (id: string) => {
  return await StudentModel.findOne({ _id: new Types.ObjectId(id) });
};

const createStudent = async (studentToCreate: Student) => {
  const newStudent = new StudentModel(studentToCreate);
  await newStudent.save();
  return getStudents();
};

const updateStudent = async (id: string, studentToUpdate: Student) => {
  await StudentModel.updateOne(
    {
      _id: new Types.ObjectId(id),
    },
    studentToUpdate
  );
  return await getStudents();
};

const deleteStudent = async (id: string) => {
  await StudentModel.deleteOne({ _id: new Types.ObjectId(id) });
};

export {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
