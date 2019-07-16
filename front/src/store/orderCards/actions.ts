import { OrderCardsActionTypes, IOrderCards } from "./types";

export function addOrderCard(data: IOrderCards[]) {
  return {
    type: OrderCardsActionTypes.ADD_ORDER_CARD,
    payload: data
  };
}

export function removeOrderCard(data: IOrderCards[]) {
  return {
    type: OrderCardsActionTypes.REMOVE_ORDER_CARD,
    payload: data
  };
}
