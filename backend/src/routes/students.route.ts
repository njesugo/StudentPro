import express from "express";
import {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/students.controller";

const router = express.Router();

router.get("/", getStudents);

router.get("/:studentId", getStudent);

router.post("/", createStudent);

router.put("/:studentId", updateStudent);

router.delete("/:studentId", deleteStudent);

export { router };