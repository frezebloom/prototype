import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { TypeTasksActionTypes } from "./types";
import { fetchError, fetchSuccess } from "./actions";
import { callApi } from "../../utils/api";

const API_ENDPOINT = "http://10.10.72.48:5000";
const PATH = "/get_task_types";

function* handleFetch() {
  try {
    const res = yield call(callApi, "post", API_ENDPOINT, PATH);
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
  yield takeEvery(TypeTasksActionTypes.FETCH_REQUEST, handleFetch);
}

function* TypeTasksSaga() {
  yield all([fork(watchFetchRequest)]);
}

export default TypeTasksSaga;