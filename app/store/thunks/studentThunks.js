import axios from 'axios';
import {
  ACloadStudent,
  ACsingleStudent,
  ACcreateStudent,
  ACdeleteStudent,
  ACupdateStudent,
} from '../actions/studentActions';

// for students
export const loadStudents = () => {
  return async (dispatch) => {
    const studentList = (await axios.get('/api/students')).data;
    dispatch(ACloadStudent(studentList));
  };
};

export const loadSingleStudent = (id) => {
  return async (dispatch) => {
    const singleStudent = (await axios.get(`/api/students/id/${id}`)).data;
    dispatch(ACsingleStudent(singleStudent));
  };
};

export const createStudent = (firstName, lastName, email, gpa, history) => {
  return async (dispatch) => {
    const newStudent = (
      await axios.post('/api/students/', { firstName, lastName, email, gpa })
    ).data;
    history.push(`/students/id/${newStudent.id}`);
    dispatch(ACcreateStudent(newStudent));
  };
};

export const deleteStudent = (id, history) => {
  return async (dispatch) => {
    const student = await axios.delete(`/api/students/id/${id}`);
    dispatch(ACdeleteStudent(id));
    history.push('/students');
  };
};

export const updateStudent = (
  firstName,
  lastName,
  email,
  gpa,
  id,
  campusId,
  history
) => {
  return async (dispatch) => {
    const student = (
      await axios.put(`/api/students/id/${id}`, {
        firstName,
        lastName,
        email,
        gpa,
        id,
        campusId,
      })
    ).data;
    console.log(student);
    dispatch(ACupdateStudent(student));
    if (campusId !== null) {
      history.push(`/students/id/${id}`);
    }
  };
};
