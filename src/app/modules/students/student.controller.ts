import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    // we will send data
    const result = await studentServices.createStudentToDB(studentData);

    res.status(200).json({
      success: true,
      message: 'New student is created',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'students  got',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.id;
    const result = await studentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'one student  got',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const studentController = {
  createStudent,
  getStudents,
  getSingleStudent,
};
