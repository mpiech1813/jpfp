import axios from 'axios';

// for campuses
export const loadCampuses = () => {
  return async (dispatch) => {
    const campuseList = (await axios.get('/api/campuses')).data;
    dispatch({
      type: 'LOAD_CAMPUSES',
      campuseList,
    });
  };
};

export const loadSingleCampus = (id) => {
  return async (dispatch) => {
    const singleCampus = (await axios.get(`/api/campuses/id/${id}`)).data;
    dispatch({
      type: 'SINGLE_CAMPUS',
      singleCampus,
    });
  };
};

export const unloadCampus = () => {
  return (dispatch) => {
    dispatch({
      type: 'UNLOAD_CAMPUS',
    });
  };
};

export const createCampus = (name, address, description, history) => {
  return async (dispatch) => {
    const newCampus = (
      await axios.post('/api/campuses', { name, address, description })
    ).data;
    history.push(`/campuses/id/${newCampus.id}`);
    dispatch({
      type: 'CREATE_CAMPUS',
      newCampus,
    });
  };
};

// for students
export const loadStudents = () => {
  return async (dispatch) => {
    const studentList = (await axios.get('/api/students')).data;
    dispatch({
      type: 'LOAD_STUDENTS',
      studentList,
    });
  };
};

export const loadSingleStudent = (id) => {
  return async (dispatch) => {
    const singleStudent = (await axios.get(`/api/students/id/${id}`)).data;
    dispatch({
      type: 'SINGLE_STUDENT',
      singleStudent,
    });
  };
};

export const unloadStudent = () => {
  return (dispatch) => {
    dispatch({
      type: 'UNLOAD_STUDENT',
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
      type: 'CREATE_STUDENT',
      newStudent,
    });
  };
};

export const deleteStudent = (id) => {
  return async (dispatch) => {
    //some sort of axios call
  };
};
