import { Reducer } from "redux";
import { TypeTasksState, TypeTasksActionTypes } from "./types";

export const initialState: TypeTasksState = {
  data: [],
  errors: undefined,
  loading: false
};

const reducer: Reducer<TypeTasksState> = (state = initialState, action) => {
  switch (action.type) {
    case TypeTasksActionTypes.FETCH_REQUEST: {
      return { ...state, loading: false };
    }
    case TypeTasksActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: true, data: action.payload };
    }
    case TypeTasksActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as typeTasksReducer };
