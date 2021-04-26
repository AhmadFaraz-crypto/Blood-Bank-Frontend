import { call, put, takeLatest } from 'redux-saga/effects';
import * as RootNavigation from '../../../utils/RootNavigation.js';

// constants
import config from '../../../constants/config';
import XHR from '../../../utils/xhr';

// redux
import types from './types';
import { reset } from './actions';

function codeVerificationAPI(data) {
  const URL = `${config.baseURL}/validate_phone/`;
  const options = {
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    method: 'POST',
    data,
  };

  return XHR(URL, options);
}

function* codeVerification({ data }) {
  try {
    const res = yield call(codeVerificationAPI, data);

    if (res) {
      console.log(res);
      RootNavigation.navigate('Registration');
    }
  } catch (e) {
    const { response } = e;
    console.log(response);
  } finally {
    yield put(reset());
  }
}

export default function* watcher() {
  yield takeLatest(types.codeVerification, codeVerification);
}