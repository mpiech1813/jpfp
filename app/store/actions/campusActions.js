import {
  LOAD_CAMPUSES,
  SINGLE_CAMPUS,
  CREATE_CAMPUS,
  DELETE_CAMPUS,
  UPDATE_CAMPUS,
} from '../types/types';

//ACTION CREATORS FOR CAMPUSES

export const ACloadCampus = (campuseList) => {
  return {
    type: LOAD_CAMPUSES,
    campuseList,
  };
};

export const ACsingleCampus = (singleCampus) => {
  return {
    type: SINGLE_CAMPUS,
    singleCampus,
  };
};

export const ACcreateCampus = (name, address, description, history) => {
  return {
    type: CREATE_CAMPUS,
    newCampus,
  };
};

export const ACdeleteCampus = (id) => {
  return {
    type: DELETE_CAMPUS,
    id,
  };
};

export const ACupdateCampus = (campus) => {
  return {
    type: UPDATE_CAMPUS,
    campus,
  };
};
