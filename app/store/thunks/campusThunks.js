import axios from 'axios';
import {
  ACloadCampus,
  ACsingleCampus,
  ACcreateCampus,
  ACdeleteCampus,
  ACupdateCampus,
} from '../actions/campusActions';

// for campuses
export const loadCampuses = () => {
  return async (dispatch) => {
    const campuseList = (await axios.get('/api/campuses')).data;
    dispatch(ACloadCampus(campuseList));
  };
};

export const loadSingleCampus = (id) => {
  return async (dispatch) => {
    const singleCampus = (await axios.get(`/api/campuses/id/${id}`)).data;
    dispatch(ACsingleCampus(singleCampus));
  };
};

export const createCampus = (name, address, description, history) => {
  return async (dispatch) => {
    const newCampus = (
      await axios.post('/api/campuses', { name, address, description })
    ).data;
    history.push(`/campuses/id/${newCampus.id}`);
    dispatch(ACcreateCampus(newCampus));
  };
};

export const deleteCampus = (id, history) => {
  return async (dispatch) => {
    const campus = await axios.delete(`/api/campuses/id/${id}`);
    dispatch(ACdeleteCampus(id));
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
    dispatch(ACupdateCampus(campus));
    history.push(`/campuses/id/${id}`);
  };
};
