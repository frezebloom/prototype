import { ICornerDialog, CornerDialogActionTypes } from './types';

export function newMessage(data: ICornerDialog[]) {
  return {
    type: CornerDialogActionTypes.NEW_MESSAGE,
    payload: data
  }
}

export function hideMessage() {
  return {
    type: CornerDialogActionTypes.HIDE_MESSAGE
  }
}