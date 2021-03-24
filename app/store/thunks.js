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

export const deleteStudent = (id) => {
  return async (dispatch) => {
    //some sort of axios call
  };
};
