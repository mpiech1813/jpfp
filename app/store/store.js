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
  }
  //   console.log('campuses', state);
  return state;
};

const singleCampusReducer = (state = {}, action) => {
  if (action.type === 'SINGLE_CAMPUS') {
    state = action.singleCampus;
  }
  return state;
};

const reducer = combineReducers({
  students: studentReducer,
  campuses: campusReducer,
  singleCampus: singleCampusReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
