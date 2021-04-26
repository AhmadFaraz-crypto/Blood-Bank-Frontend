import types from './types';

export const codeVerification = data => ({
  type: types.codeVerification,
  data,
});

export const reset = () => ({
  type: types.reset,
});