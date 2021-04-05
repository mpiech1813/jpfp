import { UNLOAD } from '../types/types';

//universal thunk
export const unload = () => {
  return (dispatch) => {
    dispatch({
      type: UNLOAD,
    });
  };
};
