import { TypeTasksActionTypes, ITypeTasks } from './types';

export function fetchRequestTypeTasks() {
  return { type: TypeTasksActionTypes.FETCH_REQUEST };
}

export function fetchSuccess(data: ITypeTasks[]) {
  return {
    type: TypeTasksActionTypes.FETCH_SUCCESS,
    payload: data
  };
}

export function fetchError(message: string) {
  return {
    type: TypeTasksActionTypes.FETCH_ERROR,
    payload: message
  };
}
