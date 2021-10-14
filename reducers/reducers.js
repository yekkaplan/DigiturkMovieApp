import {act} from 'react-test-renderer';
import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_REQUEST_SUCCESS,
  GET_MOVIES_REQUEST_FAILED,
  GET_MOVIES_DETAIL_REQUEST,
  GET_MOVIES_DETAIL_SUCESS,
  GET_MOVIES_DETAIL_FAILED,
} from '../constants/action-constant';

const INITIAL_STATE = {
  movies: [],
  movieDetail: null,
  errorMessage: '',
};

/**
 * @param {Any} state - app state
 * @param {Any} action - it contains method/object actions.
 * @returns - return reducer
 */
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return {...state};
    case GET_MOVIES_REQUEST_SUCCESS:
      return {...state, movies: action.payload};
    case GET_MOVIES_DETAIL_REQUEST:
    case GET_MOVIES_DETAIL_SUCESS:
      return {...state, movies: action.payload};
    case GET_MOVIES_REQUEST_FAILED:
      return {...state, errorMessage: 'Hata!'};
    case GET_MOVIES_DETAIL_FAILED:
      return {...state, errorMessage: action.payload};
    default:
      return state;
  }
};
