import axios from 'axios';
import {
  LOAD_STUDENTS,
  SINGLE_STUDENT,
  CREATE_STUDENT,
  DELETE_STUDENT,
  UPDATE_STUDENT,
} from '../types/types';

// for students
export const loadStudents = () => {
  return async (dispatch) => {
    const studentList = (await axios.get('/api/students')).data;
    dispatch({
      type: LOAD_STUDENTS,
      studentList,
    });
  };
};

export const loadSingleStudent = (id) => {
  return async (dispatch) => {
    const singleStudent = (await axios.get(`/api/students/id/${id}`)).data;
    dispatch({
      type: SINGLE_STUDENT,
      singleStudent,
    });
  };
};

export const createStudent = (firstName, lastName, email, gpa, history) => {
  return async (dispatch) => {
    const newStudent = (
      await axios.post('/api/students/', { firstName, lastName, email, gpa })
    ).data;
    history.push(`/students/id/${newStudent.id}`);
    dispatch({
      type: CREATE_STUDENT,
      newStudent,
    });
  };
};

export const deleteStudent = (id, history) => {
  return async (dispatch) => {
    const student = await axios.delete(`/api/students/id/${id}`);
    dispatch({
      type: DELETE_STUDENT,
      id,
    });
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
    dispatch({
      type: UPDATE_STUDENT,
      student,
    });
    if (campusId !== null) {
      history.push(`/students/id/${id}`);
    }
  };
};
