import produce from 'immer';

import types from './types';

export const initialState = {
  requesting: false,
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.register:
        draft.requesting = true;
        break;

      case types.reset:
        draft.requesting = false;
        break;
    }
  });
