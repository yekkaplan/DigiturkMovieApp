import axios from 'axios';
import {
  GET_MOVIES_REQUEST_SUCCESS,
  GET_MOVIES_DETAIL_SUCCESS,
  GET_MOVIES_REQUEST_FAILED,
  GET_MOVIES_DETAIL_FAILED,
} from '../constants/action-constant';

import {API_KEY, LANGUAGE} from '../constants/app-constant';
/**
 *
 * @param {String} API_KEY  - moviedb key
 * @param {String} LANGUAGE  - locale language code
 * @returns
 */
export const getMoviesFromAPI = async () => {
  var response = axios
    .get(
      'http://api.themoviedb.org/3/movie/popular?api_key=' +
        API_KEY +
        '&language=' +
        LANGUAGE +
        '&page=1',
    )
    .then(res => {
      return {type: GET_MOVIES_REQUEST_SUCCESS, payload: res.data};
    })
    .catch(error => {
      return {type: GET_MOVIES_REQUEST_FAILED, payload: error};
    });
  return response;
};
/**
 * @param {String} API_KEY  - moviedb key
 * @param {String} LANGUAGE  - locale language code
 * @param {String} paramId  - its movie id
 * @returns  -
 */
export const getMovieDetailFromAPI = paramId => {
  var response = axios
    .get(
      'https://api.themoviedb.org/3/movie/' +
        paramId +
        '?api_key=' +
        API_KEY +
        '&language=' +
        LANGUAGE,
    )
    .then(res => {
      return {type: GET_MOVIES_DETAIL_SUCCESS, payload: res.data};
    })
    .catch(error => {
      return {type: GET_MOVIES_DETAIL_FAILED, payload: error};
    });

  return response;
};
