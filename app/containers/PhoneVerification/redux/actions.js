import types from './types';

export const phoneVerification = data => ({
  type: types.phoneVerification,
  data,
});

export const reset = () => ({
  type: types.reset,
});