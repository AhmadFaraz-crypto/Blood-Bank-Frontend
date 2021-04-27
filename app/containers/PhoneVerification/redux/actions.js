import types from './types';

export const phoneVerification = data => ({
  type: types.phoneVerification,
  data,
});

export const getCountries = () => ({
  type: types.getCountries,
});

export const getCountriessSuccess = data => ({
  type: types.getCountriessSuccess,
  data,
});

export const reset = () => ({
  type: types.reset,
});