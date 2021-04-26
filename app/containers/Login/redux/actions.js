import types from './types';

export const login = data => ({
  type: types.login,
  data,
});

export const reset = () => ({
  type: types.reset,
});