/* eslint-disable prettier/prettier */
import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_REQUEST_SUCCESS,
  GET_MOVIES_DETAIL_REQUEST,
  GET_MOVIES_DETAIL_REQUEST_SUCESS,
  GET_MOVIES_REQUEST_FAILED,
  GET_MOVIES_DETAIL_FAILED,
} from '../constants/action-constant';

export const getMovies = payload => ({
  type: GET_MOVIES_REQUEST,
  payload,
});

export const getMoviesSuccess = payload => ({
  type: GET_MOVIES_REQUEST_SUCCESS,
  payload,
});

/**
 * @param {String} paramId - movie detail id
 * @returns - reducers in action
 */
export const getMoviesDetail = paramId => ({
  type: GET_MOVIES_DETAIL_REQUEST,
  paramId: paramId,
});
export const getMoviesDetailSucess = payload => ({
  type: GET_MOVIES_DETAIL_REQUEST_SUCESS,
  payload,
});

export const getMoviesFailed = payload => ({
  type: GET_MOVIES_REQUEST_FAILED,
  payload,
});

export const getMoviesDetailFailed = payload => ({
  type: GET_MOVIES_DETAIL_FAILED,
  payload,
});
