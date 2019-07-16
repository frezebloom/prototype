export interface IOrderCards extends ApiResponse {
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

export const enum OrderCardsActionTypes {
  ADD_ORDER_CARD = "@@OrderCards/ADD_CARD",
  REMOVE_ORDER_CARD = "@@OrderCards/REMOVE_CARD"
}

export interface OrderCardsState {
  readonly data: IOrderCards[];
}
