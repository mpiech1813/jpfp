import axios from 'axios';
import {
  LOAD_CAMPUSES,
  UNLOAD,
  SINGLE_CAMPUS,
  CREATE_CAMPUS,
  DELETE_CAMPUS,
  UPDATE_CAMPUS,
  LOAD_STUDENTS,
  SINGLE_STUDENT,
  CREATE_STUDENT,
  DELETE_STUDENT,
  UPDATE_STUDENT,
} from './types';

//universal thunk
export const unload = () => {
  return (dispatch) => {
    dispatch({
      type: UNLOAD,
    });
  };
};

// for campuses
export const loadCampuses = () => {
  return async (dispatch) => {
    const campuseList = (await axios.get('/api/campuses')).data;
    dispatch({
      type: LOAD_CAMPUSES,
      campuseList,
    });
  };
};

export const loadSingleCampus = (id) => {
  return async (dispatch) => {
    const singleCampus = (await axios.get(`/api/campuses/id/${id}`)).data;
    dispatch({
      type: SINGLE_CAMPUS,
      singleCampus,
    });
  };
};
// functions as set campus

export const createCampus = (name, address, description, history) => {
  return async (dispatch) => {
    const newCampus = (
      await axios.post('/api/campuses', { name, address, description })
    ).data;
    history.push(`/campuses/id/${newCampus.id}`);
    dispatch({
      type: CREATE_CAMPUS,
      newCampus,
    });
  };
};

export const deleteCampus = (id, history) => {
  return async (dispatch) => {
    const campus = await axios.delete(`/api/campuses/id/${id}`);
    dispatch({
      type: DELETE_CAMPUS,
      id,
    });
    history.push('/campuses');
  };
};

export const updateCampus = (name, address, description, id, history) => {
  return async (dispatch) => {
    const campus = (
      await axios.put(`/api/campuses/id/${id}`, {
        name,
        address,
        description,
        id,
      })
    ).data;
    dispatch({
      type: UPDATE_CAMPUS,
      campus,
    });
    history.push(`/campuses/id/${id}`);
  };
};

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
