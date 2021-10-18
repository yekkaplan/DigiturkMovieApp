import {takeEvery, all, call, put} from 'redux-saga/effects';
import {
  getMoviesSuccess,
  getMoviesDetailSucess,
  getMoviesFailed,
  getMoviesDetailFailed,
} from '../actions/action';

import {getMovieDetailFromAPI, getMoviesFromAPI} from '../service/service';
import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_DETAIL_REQUEST,
  GET_MOVIES_DETAIL_FAILED,
  GET_MOVIES_REQUEST_FAILED,
} from '../constants/action-constant';
/**
 *   get all movie list its saga
 */
function* getMovieList() {
  try {
    const data = yield call(getMoviesFromAPI);
    data.type === GET_MOVIES_REQUEST_FAILED
      ? yield put(getMoviesFailed(data.payload))
      : yield put(getMoviesSuccess(data.payload));
  } catch (error) {
    yield put(getMoviesFailed(error));
  }
}

function* getMovieDetail(action) {
  try {
    const data = yield call(getMovieDetailFromAPI, action.paramId);
    yield put(getMoviesDetailSucess(data.payload));
  } catch (error) {
    yield put(getMoviesDetailFailed(error.message));
  }
}

function* getMoviesWatcher() {
  yield takeEvery(GET_MOVIES_REQUEST, getMovieList);
}

function* getMoviesDetailWatcher() {
  yield takeEvery(GET_MOVIES_DETAIL_REQUEST, getMovieDetail);
}

export default function* moviesSaga() {
  yield all([getMoviesWatcher(), getMoviesDetailWatcher()]);
}
