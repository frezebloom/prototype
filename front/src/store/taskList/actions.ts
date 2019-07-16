import { TaskListActionTypes, ITaskList, INewTask } from './types';

export function fetchRequestTaskList() {
  return { type: TaskListActionTypes.FETCH_REQUEST };
}

export function fetchSuccess(data: ITaskList[]) {
  return {
    type: TaskListActionTypes.FETCH_SUCCESS,
    payload: data
  };
}

export function fetchError(message: string) {
  return {
    type: TaskListActionTypes.FETCH_ERROR,
    payload: message
  };
}

export function createNewTask(data: INewTask) {
  return {
    type: TaskListActionTypes.CREATE_NEW_TASK,
    payload: data
  }
}

export function createSuccessNewTask(data: ITaskList[]) {
  return {
    type: TaskListActionTypes.CREATE_SUCCESS_NEW_TASK,
    payload: data
  }
} 


