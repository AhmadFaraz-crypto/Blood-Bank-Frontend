import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRegister = state => state.register || initialState;

const makeSelectRequesting = () =>
  createSelector(
    selectRegister,
    state => state.requesting,
  );

export { makeSelectRequesting };
