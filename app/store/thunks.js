import axios from 'axios';

export const loadStudents = () => {
  return async (dispatch) => {
    const studentList = (await axios.get('/api/students')).data;
    dispatch({
      type: 'LOAD_STUDENTS',
      studentList,
    });
  };
};

//thunk
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

export const createCampus = (name, address, description) => {
  return async (dispatch) => {
    const newCampus = (
      await axios.post('/api/campuses', { name, address, description })
    ).data;
    // console.log(newCampus);
    dispatch({
      type: 'CREATE_CAMPUS',
      newCampus,
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

export const deleteStudent = (id) => {
  return async (dispatch) => {
    //some sort of axios call
  };
};
