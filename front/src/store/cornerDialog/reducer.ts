import { Reducer } from "redux";
import { CornerDialogState, CornerDialogActionTypes } from './types';

export const initialState: CornerDialogState = {
  data: [],
  hide: true
}

const reducer: Reducer<CornerDialogState> = (state = initialState, action) => {
  switch(action.type) {
    case CornerDialogActionTypes.NEW_MESSAGE: {
      return { ...state, data: action.payload, hide: false }
    }
    case CornerDialogActionTypes.HIDE_MESSAGE: {
      return { ...state, hide: true }
    }
    default: {
      return state;
    }
  }
}

export { reducer as cornerDialogReducer }