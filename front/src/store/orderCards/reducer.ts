import { Reducer } from "redux";
import { OrderCardsState, OrderCardsActionTypes } from "./types";

export const initialState: OrderCardsState = {
  data: []
};

const reducer: Reducer<OrderCardsState> = (state = initialState, action) => {
  switch (action.type) {
    case OrderCardsActionTypes.ADD_ORDER_CARD: {
      return { ...state, data: action.payload };
    }
    case OrderCardsActionTypes.REMOVE_ORDER_CARD: {
      return { ...state, data: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as orderCardsReducer };
