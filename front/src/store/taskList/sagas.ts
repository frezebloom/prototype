import { all, call, fork, put, take, takeEvery, select, delay } from "redux-saga/effects";
import { eventChannel, END } from 'redux-saga';
import { TaskListActionTypes } from "./types";
import { fetchError, fetchSuccess, createSuccessNewTask } from "./actions";
import { newMessage, hideMessage } from '../cornerDialog/actions'
import { callApi } from "../../utils/api";

const API_ENDPOINT = "http://10.10.72.48:5000";

const getState = state => state;

function* handleFetch() {
  try {
    const res = yield call(callApi, "post", API_ENDPOINT, "/taskList");
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

function* createNewTask(data) {
  try {
    const res = yield call(callApi, "post", API_ENDPOINT, "/create_task", data);
    if (res.error) {
      yield put(fetchError(res.error));
    } else {
      yield put(createSuccessNewTask(res));
      yield put(newMessage(res))
      yield delay(5000);
      yield put(hideMessage());
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack));
    } else {
      yield put(fetchError("An unknown error occured."));
    }
  }
}

function createSocketChannel(socket) {
  return eventChannel(emit => {
    socket.onmessage = (event) => {
      emit(event.data)
    };
    socket.onclose = () => {
      emit(END);
    };
    const unsubscribe = () => {
      socket.onmessage = null;
    };
    return unsubscribe;
  });
}

function createWebSocketConnection() {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket("ws://10.10.72.48:40510");
    socket.onopen = function () {
      resolve(socket);
    };
    socket.onerror = function (error) {
      reject(error);
    }
  });
}

function* listenForSocketMessages() {
  let socket;
  let socketChannel;

  try {
    socket = yield call(createWebSocketConnection);
    socketChannel = yield call(createSocketChannel, socket);

    yield console.log('connect')

    while (true) {
      const payload = [];
      const message = JSON.parse(yield take(socketChannel));
      const store = yield select(getState);
      const taskList = store.taskList.data;

      taskList.forEach((element) => {
        if (element.id !== message.id) {
          payload.push(element);
        } else {
          element.status = message.status;
          payload.push(element);
        }
      });
      yield put(fetchSuccess(payload));
    }
  } catch (error) {
    yield console.log(error);
  } finally {
    if (yield false) {
      socketChannel.close();
      socket.close();
    } else {
      yield console.log('disconect');
    }
  }
}

function* connect() {
  yield fork(listenForSocketMessages);
}

function* watchFetchRequest() {
  yield takeEvery(TaskListActionTypes.FETCH_REQUEST, handleFetch);
}

function* watchSendRequest() {
  yield takeEvery(TaskListActionTypes.CREATE_NEW_TASK, createNewTask);
}


function* TaskListSagas() {
  yield all([fork(watchFetchRequest), fork(watchSendRequest), fork(connect)]);
}

export default TaskListSagas;