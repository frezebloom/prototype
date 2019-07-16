import { MapsActionTypes, IMaps } from "./types";

export function fetchRequest() {
  return { type: MapsActionTypes.FETCH_REQUEST };
}

export function fetchSuccess(data: IMaps[]) {
  return {
    type: MapsActionTypes.FETCH_SUCCESS,
    payload: data
  };
}

export function fetchError(message: string) {
  return {
    type: MapsActionTypes.FETCH_ERROR,
    payload: message
  };
}

export function addCard(data: IMaps[]) {
  return {
    type: MapsActionTypes.ADD_CARD,
    payload: data
  };
}

export function removeCard(data: IMaps[]) {
  return {
    type: MapsActionTypes.ADD_CARD,
    payload: data
  };
}
