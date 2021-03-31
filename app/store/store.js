//npm i -D react-redux
//npm i -D redux-thunk
//npm i -D redux-logger
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loggingMiddleware from 'redux-logger';

const campusReducer = (state = [], action) => {
  if (action.type === 'LOAD_CAMPUSES') {
    state = action.campuseList;
  } else if (action.type === 'CREATE_CAMPUS') {
    state = [...state, action.newCampus];
  } else if (action.type === 'DELETE_CAMPUS') {
    // console.log(action.campus.id);
    return state.filter((campus) => campus.id !== action.campus.id);
  }
  //   console.log('campuses', state);
  return state;
};

const singleCampusReducer = (state = {}, action) => {
  if (action.type === 'SINGLE_CAMPUS') {
    state = action.singleCampus;
  } else if (action.type === 'UNLOAD_CAMPUS') {
    return {};
  } else if (action.type === 'DELETE_CAMPUS') {
    // console.log(state);
    //add all campuses to filter through
    // return if(deleted campsu is === same as campuse in state){ set state to {}}
  }
  return state;
};

const studentReducer = (state = [], action) => {
  if (action.type === 'LOAD_STUDENTS') {
    state = action.studentList;
  } else if (action.type === 'CREATE_STUDENT') {
    state = [...state, action.newStudent];
  }
  //   console.log(`sutdents`, state);
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

// const store = createStore(reducer, applyMiddleware(loggingMiddleware, thunk));
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
