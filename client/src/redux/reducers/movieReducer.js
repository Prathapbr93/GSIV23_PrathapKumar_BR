import * as actionTypes from '../actions/actionType';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.FETCH_MOVIES_REQUEST:
        return { ...state, isLoading: true, error: null };
      case actionTypes.FETCH_MOVIES_SUCCESS:
        return { ...state, data: action.payload, isLoading: false, error: null };
      case actionTypes.FETCH_MOVIES_FAILURE:
        return { ...state, isLoading: false, error: action.payload };
      default:
        return state;
    }
  };

  export default movieReducer;