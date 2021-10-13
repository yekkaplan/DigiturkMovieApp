import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import {reducer} from '../reducers/reducers';
import rootSaga from '../saga/saga';
import logger from 'redux-logger';
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);
