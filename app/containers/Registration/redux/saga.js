import { call, put, takeLatest } from 'redux-saga/effects';

// constants
import config from '../../../constants/config';
import XHR from '../../../utils/xhr';

// redux
import types from './types';
import { reset } from './actions';

function registerAPI(data) {
  const URL = `${config.baseURL}/register/`;
  const options = {
    method: 'POST',
    data,
  };

  return XHR(URL, options);
}

function* register({ data }) {
  try {
    const res = yield call(registerAPI, data);

    if (res) {
      console.log(res);
    }
  } catch (e) {
    console.log(e)
    const { response } = e;
  } finally {
    yield put(reset());
  }
}

export default function* watcher() {
  yield takeLatest(types.register, register);
}