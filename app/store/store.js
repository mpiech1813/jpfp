//npm i -D react-redux
//npm i -D redux-thunk
//npm i -D redux-logger
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//thunk to create new user will go here

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
  } else if (action.type === 'CREATE_CAMPUS') {
    state = [...state, action.newCampus];
  }
  //   console.log('campuses', state);
  return state;
};

const singleCampusReducer = (state = {}, action) => {
  if (action.type === 'SINGLE_CAMPUS') {
    state = action.singleCampus;
  } else if (action.type === 'UNLOAD_CAMPUS') {
    return {};
  }
  return state;
};

const singleStudentReducer = (state = {}, action) => {
  if (action.type === 'SINGLE_STUDENT') {
    state = action.singleStudent;
  } else if (action.type === 'UNLOAD_STUDENT') {
    return {};
  }
  return state;
};

const reducer = combineReducers({
  students: studentReducer,
  campuses: campusReducer,
  singleCampus: singleCampusReducer,
  singleStudent: singleStudentReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
