import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectlogin = state => state.login || initialState;

const makeSelectRequesting = () =>
  createSelector(
    selectlogin,
    state => state.requesting,
  );

export { makeSelectRequesting };
