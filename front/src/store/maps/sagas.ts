import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { MapsActionTypes } from "./types";
import { fetchError, fetchSuccess } from "./actions";
import { callApi } from "../../utils/api";

const API_ENDPOINT = "http://10.10.72.48:5000";
const PATH = "/maps"

function getCookie(name: string): string {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

const TOKEN = `${getCookie('csrftoken')}; ${getCookie('last_visited_page')}; ${getCookie('sessionid')}`

function* handleFetch() {
  try {
    const res = yield call(callApi, "post", API_ENDPOINT, PATH, TOKEN);
    if (res.error) {
      yield put(fetchError(res.error));
    } else {
      yield put(fetchSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack));
    } else {
      yield put(fetchError("An unknown error occured."));
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(MapsActionTypes.FETCH_REQUEST, handleFetch);
}

function* mapsSaga() {
  yield all([fork(watchFetchRequest)]);
}

export default mapsSaga;