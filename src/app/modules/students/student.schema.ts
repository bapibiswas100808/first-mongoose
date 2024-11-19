import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Name, Student } from './student.interface';

const userNameSchema = new Schema<Name>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
  fatrherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherNum: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherNum: { type: String, required: true },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  num: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  email: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  avatar: String,
  gender: ['Male', 'Female'],
  contactNo: { type: String, required: true },
  emergencyNum: String,
  bloodGroup: ['A-', 'A+', 'B', 'B+', 'O+', 'O-', 'AB+', 'AB-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  gurdian: guardianSchema,
  proFileImage: String,
  isActive: { type: Boolean, required: true },
  localGUardian: localGuardianSchema,
});

export const studentModel = model<Student>('Student', studentSchema);
