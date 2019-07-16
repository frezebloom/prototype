export interface ITypeTasks extends ApiResponse {
  id: number;
  type_name: string;
}

export type ApiResponse = Record<string, string | number>;

export const enum TypeTasksActionTypes {
  FETCH_REQUEST = "@@typeTasks/FETCH_REQUEST",
  FETCH_SUCCESS = "@@typeTasks/FETCH_SUCCESS",
  FETCH_ERROR = "@@typeTasks/FETCH_ERROR",
}

export interface TypeTasksState {
  readonly loading: boolean;
  readonly data: ITypeTasks[];
  readonly errors?: string;
}