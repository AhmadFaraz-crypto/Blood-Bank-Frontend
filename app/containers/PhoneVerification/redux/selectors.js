import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPhoneVerification = state => state.phoneVerification || initialState;

const makeSelectRequesting = () =>
  createSelector(
    selectPhoneVerification,
    state => state.requesting,
  );

export { makeSelectRequesting };
