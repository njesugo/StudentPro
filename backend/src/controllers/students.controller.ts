import * as StudentsService from "../services/students.service";

export const getStudents = async (req: any, res: any) => {
  const students = await StudentsService.getStudents();
  return res.status(200).json(students);
};

export const getStudent = async (req: any, res: any) => {
  const { id } = req.params;
  const student = await StudentsService.getStudent(id);
  return res.status(200).json(student);
};

export const createStudent = async (req: any, res: any) => {
  const studentToCreate = req.body;
  const students = await StudentsService.createStudent(studentToCreate);
  return res.status(200).json(students);
};

export const updateStudent = async (req: any, res: any) => {
  const { id } = req.params;
  const studentUpdated = await StudentsService.updateStudent(
    id,
    req.body
  );
  return res.status(200).json(studentUpdated);
};

export const deleteStudent = async (req: any, res: any) => {
  const { id } = req.params;
  await StudentsService.deleteStudent(id);
  return res
    .status(200)
    .json(`Student with id ${id} succesfully deleted`);
};