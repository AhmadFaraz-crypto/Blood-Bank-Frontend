import produce from 'immer';

import types from './types';

export const initialState = {
  requesting: false,
  countries: false,
  requestingGetCountries: false,
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.phoneVerification:
        draft.requesting = true;
        break;

      case types.getCountries:
      case types.phoneVerification:
        draft.requestingGetCountries = true;
        break;

      case types.getCountriessSuccess:
        draft.countries = action.data;
        break;

      case types.reset:
        draft.requesting = false;
        draft.requestingGetProfiles = false;
        break;
    }
  });
