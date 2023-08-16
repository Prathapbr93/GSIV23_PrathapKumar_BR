import * as actionTypes from './actionType';
import api from '../../services/api';

export const fetchMovies = () => async dispatch => {
  dispatch({ type: actionTypes.FETCH_MOVIES_REQUEST });

  try {
    const data = await api.getUpcomingMovies();
    dispatch({ type: actionTypes.FETCH_MOVIES_SUCCESS, payload: data.results });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_MOVIES_FAILURE, payload: error.message });
  }
};