export interface ITaskList extends ApiResponse {
  id: number;
  status: string;
  updated: string;
  type: string;
}

export interface INewTask {
  type: string,
  maps: Array<object>
}

export type ApiResponse = Record<string, string | number>;

export const enum TaskListActionTypes {
  FETCH_REQUEST = "@@TaskList/FETCH_REQUEST",
  FETCH_SUCCESS = "@@TaskList/FETCH_SUCCESS",
  FETCH_ERROR = "@@TaskList/FETCH_ERROR",
  CREATE_NEW_TASK = "@@TaskList/CREATE_NEW_TASK",
  CREATE_SUCCESS_NEW_TASK = "@@TaskList/CREATE_SUCCESS_NEW_TASK"
}

export interface TaskListState {
  readonly data: ITaskList[];
  readonly errors?: string;
  readonly loading: boolean;
}

