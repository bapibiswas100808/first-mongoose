import { Student } from './student.interface';
import { studentModel } from './student.schema';

const createStudentToDB = async (student: Student) => {
  const result = await studentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await studentModel.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  const result = await studentModel.find({ id });
  return result;
};
export const studentServices = {
  createStudentToDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
