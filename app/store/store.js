//npm i -D react-redux
//npm i -D redux-thunk
//npm i -D redux-logger
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

export const loadStudents = () => {
  return async (dispatch) => {
    const studentList = (await axios.get('/api/students')).data;
    console.log(studentList);
    dispatch({
      type: 'LOAD_STUDENTS',
      studentList,
    });
  };
};

//thunk
export const loadCampuses = () => {
  console.log('runnig my thunk');
  return async (dispatch) => {
    console.log('before await');
    const campuseList = (await axios.get('/api/campuses')).data;
    console.log(campuseList);
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

//thunk to create new user

const studentReducer = (state = [], action) => {
  if (action.type === 'LOAD_STUDENTS') {
    state = action.studentList;
  }
  //   console.log(`sutdents`, state);
  return state;
};

const campusReducer = (state = [], action) => {
  if (action.type === 'LOAD_CAMPUSES') {
    state = action.campuseList;
  }
  //   console.log('campuses', state);
  return state;
};

const reducer = combineReducers({
  students: studentReducer,
  campuses: campusReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
