import { call, put, takeLatest } from 'redux-saga/effects';

// constants
import config from '../../../constants/config';
import XHR from '../../../utils/xhr';

// redux
import types from './types';
import { reset } from './actions';

function loginAPI(data) {
  const URL = `${config.baseURL}/login/`;
  const options = {
    method: 'POST',
    data,
  };

  return XHR(URL, options);
}

function* login({ data }) {
  try {
    const res = yield call(loginAPI, data);

    if (res) {
      console.log(res);
    }
  } catch (e) {
    console.log(e)
    const { response } = e;
    console.log('response', response);
  } finally {
    yield put(reset());
  }
}

export default function* watcher() {
  yield takeLatest(types.login, login);
}