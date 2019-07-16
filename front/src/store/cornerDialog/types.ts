export interface ICornerDialog extends ApiResponse {
  status: string;
  message: string;
}

export type ApiResponse = Record<string, string>;

export const enum CornerDialogActionTypes {
  NEW_MESSAGE = "@@CornerDialog/NEW_MESSAGE",
  HIDE_MESSAGE = "@@CornerDialog/HIDE_MESSAGE"
}

export interface CornerDialogState {
  readonly data: ICornerDialog[];
  readonly hide: boolean;
}