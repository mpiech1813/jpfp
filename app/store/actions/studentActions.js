import {
  LOAD_STUDENTS,
  SINGLE_STUDENT,
  CREATE_STUDENT,
  DELETE_STUDENT,
  UPDATE_STUDENT,
} from '../types/types';

//ACTION CREATORS FOR STUDENTS

export const ACloadStudent = (studentList) => {
  return {
    type: LOAD_STUDENTS,
    studentList,
  };
};

export const ACsingleStudent = (singleStudent) => {
  return {
    type: SINGLE_STUDENT,
    singleStudent,
  };
};

export const ACcreateStudent = (newStudent) => {
  return {
    type: CREATE_STUDENT,
    newStudent,
  };
};

export const ACdeleteStudent = (id) => {
  return {
    type: DELETE_STUDENT,
    id,
  };
};

export const ACupdateStudent = (student) => {
  return {
    type: UPDATE_STUDENT,
    student,
  };
};
