import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loggingMiddleware from 'redux-logger';

const campusReducer = (state = [], action) => {
  if (action.type === 'LOAD_CAMPUSES') {
    state = action.campuseList;
  } else if (action.type === 'CREATE_CAMPUS') {
    state = [...state, action.newCampus];
  } else if (action.type === 'DELETE_CAMPUS') {
    return state.filter((campus) => campus.id !== action.id);
  } else if (action.type === 'UPDATE_CAMPUS') {
    return state.map((campus) =>
      campus.id !== action.campus.id ? campus : action.campus
    );
  }

  return state;
};

const singleCampusReducer = (state = {}, action) => {
  if (action.type === 'SINGLE_CAMPUS') {
    state = action.singleCampus;
  } else if (action.type === 'UNLOAD') {
    return {};
  } else if (action.type === 'DELETE_CAMPUS') {
    return state.id === action.id ? {} : '';
  } else if (action.type === 'UPDATE_STUDENT') {
    const { students } = state;
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
    return state.filter((student) => student.id !== action.id);
  } else if (action.type === 'UPDATE_STUDENT') {
    return state.map((student) =>
      student.id !== action.student.id ? student : action.student
    );
  }
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
