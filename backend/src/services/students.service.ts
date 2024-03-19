import { Types } from "mongoose";
import { IStudent, Student } from "../models/students.model";

const getStudents = async () => {
  return await Student.find();
};

const getStudent = async (id: string) => {
  return await Student.findOne({ _id: new Types.ObjectId(id) });
};

const createStudent = async (studentToCreate: IStudent) => {
  const newStudent = new Student(studentToCreate);
  await newStudent.save();
  return getStudents();
};

const updateStudent = async (id: string, studentToUpdate: IStudent) => {
  await Student.updateOne(
    {
      _id: new Types.ObjectId(id),
    },
    studentToUpdate
  );
  return getStudents();
};

const deleteStudent = async (id: string) => {
  await Student.deleteOne({ _id: new Types.ObjectId(id) });
};

export {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};