import { Types } from "mongoose";
import { IStudent, Student } from "../models/students.model";

const getStudents = async () => {
  return await Student.find();
};

const getStudent = async (studentId: string) => {
  return await Student.findOne({ _id: studentId });
};

const createStudent = async (studentToCreate: IStudent) => {
  const newStudent = new Student(studentToCreate);
  await newStudent.save();
  return getStudents();
};

const updateStudent = (studentId: string, studentToUpdate: IStudent) => {
  return Student.updateOne(
    {
      _id: new Types.ObjectId(studentId),
    },
    studentToUpdate
  );
};

const deleteStudent = async (studentId: string) => {
  await Student.deleteOne({ _id: studentId });
};

export {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};