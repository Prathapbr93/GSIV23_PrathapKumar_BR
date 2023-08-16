import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  // other reducers can be added here
});

export default rootReducer;
