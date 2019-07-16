import { combineReducers, Dispatch, Action, AnyAction } from "redux";
import { all, fork } from "redux-saga/effects";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";

import mapsSaga from "./maps/sagas";
import { mapsReducer } from "./maps/reducer";
import { MapsState } from "./maps/types";

import taskListSaga from "./taskList/sagas";
import { taskListReducer } from "./taskList/reducer";
import { TaskListState } from "./taskList/types";

import typeTasksSaga from "./typeTasks/sagas";
import { typeTasksReducer } from "./typeTasks/reducer";
import { TypeTasksState } from "./typeTasks/types";

import { orderCardsReducer } from "./orderCards/reducer";
import { OrderCardsState } from "./orderCards/types";

import { cornerDialogReducer } from "./cornerDialog/reducer";
import { CornerDialogState } from "./cornerDialog/types";

export interface ApplicationState {
  orderCards: OrderCardsState;
  maps: MapsState;
  taskList: TaskListState;
  typeTasks: TypeTasksState;
  cornerDialog: CornerDialogState
  router: RouterState;
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    maps: mapsReducer,
    orderCards: orderCardsReducer,
    taskList: taskListReducer,
    typeTasks: typeTasksReducer,
    cornerDialog: cornerDialogReducer,
    router: connectRouter(history)
  });

export function* rootSaga() {
  yield all([fork(mapsSaga), fork(taskListSaga), fork(typeTasksSaga)]);
}
