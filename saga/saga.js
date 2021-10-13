import {all} from 'redux-saga/effects';
import moviesSaga from './movies-saga';

/**
 * Redux all saga
 */
export default function* () {
  yield all([moviesSaga()]);
}
