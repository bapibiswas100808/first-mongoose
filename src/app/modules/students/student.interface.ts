// import { Schema, model, connect } from 'mongoose';

export type Name = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Guardian = {
  fatrherName: string;
  fatherOccupation: string;
  fatherNum: string;
  motherName: string;
  motherOccupation: string;
  motherNum: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  num: string;
};
export type Student = {
  id: string;
  name: Name;
  email: string;
  avatar?: string;
  gender: 'Male' | 'Female';
  dateOfBirth: string;
  contactNo: string;
  emergencyNum: string;
  bloodGroup: 'A-' | 'A+' | 'B' | 'B+' | 'O+' | 'O-' | 'AB+' | 'AB-';
  presentAddress: string;
  permanentAddress: string;
  gurdian: Guardian;
  proFileImage?: string;
  isActive: boolean;
  localGUardian: LocalGuardian;
};
