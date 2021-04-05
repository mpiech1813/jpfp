import axios from 'axios';
import {
  LOAD_CAMPUSES,
  SINGLE_CAMPUS,
  CREATE_CAMPUS,
  DELETE_CAMPUS,
  UPDATE_CAMPUS,
} from '../types/types';

// for campuses
export const loadCampuses = () => {
  return async (dispatch) => {
    const campuseList = (await axios.get('/api/campuses')).data;
    dispatch({
      type: LOAD_CAMPUSES,
      campuseList,
    });
  };
};

export const loadSingleCampus = (id) => {
  return async (dispatch) => {
    const singleCampus = (await axios.get(`/api/campuses/id/${id}`)).data;
    dispatch({
      type: SINGLE_CAMPUS,
      singleCampus,
    });
  };
};
// functions as set campus

export const createCampus = (name, address, description, history) => {
  return async (dispatch) => {
    const newCampus = (
      await axios.post('/api/campuses', { name, address, description })
    ).data;
    history.push(`/campuses/id/${newCampus.id}`);
    dispatch({
      type: CREATE_CAMPUS,
      newCampus,
    });
  };
};

export const deleteCampus = (id, history) => {
  return async (dispatch) => {
    const campus = await axios.delete(`/api/campuses/id/${id}`);
    dispatch({
      type: DELETE_CAMPUS,
      id,
    });
    history.push('/campuses');
  };
};

export const updateCampus = (name, address, description, id, history) => {
  return async (dispatch) => {
    const campus = (
      await axios.put(`/api/campuses/id/${id}`, {
        name,
        address,
        description,
        id,
      })
    ).data;
    dispatch({
      type: UPDATE_CAMPUS,
      campus,
    });
    history.push(`/campuses/id/${id}`);
  };
};
