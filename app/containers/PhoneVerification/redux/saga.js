import { call, put, takeLatest } from 'redux-saga/effects';
import * as RootNavigation from '../../../utils/RootNavigation.js';

// constants
import config from '../../../constants/config';
import XHR from '../../../utils/xhr';

// redux
import types from './types';
import { reset, getCountriessSuccess } from './actions';

function countriesAPI() {
  const URL = `${config.baseURL}/v1/countries/`;
  const options = {
    method: 'GET',
  };

  return XHR(URL, options);
}

function phoneVerificationAPI(data) {
  const URL = `${config.baseURL}/validate_phone/`;
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    data,
  };

  return XHR(URL, options);
}

function* countries() {
  try {
    const res = yield call(countriesAPI);

    if (res.data.country.length > 0) {
      yield put(getCountriessSuccess(res.data.country));
    } else {
      yield put(getCountriessSuccess(false));
    }
  } catch (e) {
    const { response } = e;
    console.log(response);
  } finally {
    yield put(reset());
  }
}

function* phoneVerification({ data }) {
  try {
    const res = yield call(phoneVerificationAPI, data);

    if (res) {
      console.log(res);
      RootNavigation.navigate('CodeVerification');
    }
  } catch (e) {
    const { response } = e;
    console.log(response);
  } finally {
    yield put(reset());
  }
}

export default function* watcher() {
  yield takeLatest(types.getCountries, countries);
  yield takeLatest(types.phoneVerification, phoneVerification);
}