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
    return state.filter((campus) => campus.id !== action.id);
  } else if (action.type === 'UPDATE_CAMPUS') {
    // console.log(`state is: `, state);
    // console.log(`action is: `, action);
    return state.map((campus) =>
      campus.id !== action.campus.id ? campus : action.campus
    );
  }
  //   console.log('campuses', state);
  return state;
};

const singleCampusReducer = (state = {}, action) => {
  if (action.type === 'SINGLE_CAMPUS') {
    state = action.singleCampus;
  } else if (action.type === 'UNLOAD') {
    return {};
  } else if (action.type === 'DELETE_CAMPUS') {
    // console.log(action);
    return state.id === action.id ? {} : '';
  } else if (action.type === 'UPDATE_STUDENT') {
    const { students } = state;
    // console.log('state is ', state.students);
    // console.log('action is ', action.student);
    if (students) {
      state.students = students.filter(
        (student) => student.id !== action.student.id
      );
      console.log('final state', state);
      return state;
    }
  }
  return state;
};

const studentReducer = (state = [], action) => {
  if (action.type === 'LOAD_STUDENTS') {
    state = action.studentList;
  } else if (action.type === 'CREATE_STUDENT') {
    state = [...state, action.newStudent];
  } else if (action.type === 'DELETE_STUDENT') {
    // console.log(action, state);
    return state.filter((student) => student.id !== action.id);
  } else if (action.type === 'UPDATE_STUDENT') {
    // console.log(`state is: `, state);
    // console.log(`action is: `, action);
    return state.map((student) =>
      student.id !== action.student.id ? student : action.student
    );
  }
  // console.log(`returning state `, state);
  return state;
};

const singleStudentReducer = (state = {}, action) => {
  if (action.type === 'SINGLE_STUDENT') {
    state = action.singleStudent;
  } else if (action.type === 'UNLOAD') {
    return {};
  } else if (action.type === 'DELETE_STUDENT') {
    state.id === action.id ? {} : '';
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
