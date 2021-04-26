import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCodeVerification = state => state.selectCodeVerification || initialState;

const makeSelectRequesting = () =>
  createSelector(
    selectCodeVerification,
    state => state.requesting,
  );

export { makeSelectRequesting };
