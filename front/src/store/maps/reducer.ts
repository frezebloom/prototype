import { Reducer } from "redux";
import { MapsState, MapsActionTypes } from "./types";

export const initialState: MapsState = {
  data: [],
  errors: undefined,
  loading: false
};

const reducer: Reducer<MapsState> = (state = initialState, action) => {
  switch (action.type) {
    case MapsActionTypes.FETCH_REQUEST: {
      return { ...state, loading: false };
    }
    case MapsActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: true, data: action.payload };
    }
    case MapsActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    case MapsActionTypes.ADD_CARD: {
      return { ...state, data: action.payload };
    }
    case MapsActionTypes.REMOVE_CARD: {
      return { ...state, data: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as mapsReducer };
