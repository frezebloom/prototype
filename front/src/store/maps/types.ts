export interface IMaps extends ApiResponse {
  id: number;
  name: string;
  edition: string;
  class_abbr: string;
  scale: number;
  type: string;
  title: string;
  size: string;
  creator: string;
}

export type ApiResponse = Record<string, string | number>;

export const enum MapsActionTypes {
  FETCH_REQUEST = "@@Maps/FETCH_REQUEST",
  FETCH_SUCCESS = "@@Maps/FETCH_SUCCESS",
  FETCH_ERROR = "@@Maps/FETCH_ERROR",
  ADD_CARD = "@@Maps/ADD_CARD",
  REMOVE_CARD = "@@Maps/REMOVE_CARD"
}

export interface MapsState {
  readonly loading: boolean;
  readonly data: IMaps[];
  readonly errors?: string;
}
