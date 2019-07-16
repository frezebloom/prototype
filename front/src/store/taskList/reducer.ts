import { Reducer } from "redux";
import { TaskListState, TaskListActionTypes } from "./types";

export const initialState: TaskListState = {
  data: [],
  errors: undefined,
  loading: false
};

const reducer: Reducer<TaskListState> = (state = initialState, action) => {
  switch (action.type) {
    case TaskListActionTypes.FETCH_REQUEST: {
      return { ...state, loading: false };
    }
    case TaskListActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: true, data: action.payload };
    }
    case TaskListActionTypes.CREATE_NEW_TASK: {
      return { ...state, loading: false };
    }
    case TaskListActionTypes.CREATE_SUCCESS_NEW_TASK: {
      const taskList = [...state.data, ...action.payload]
      return { ...state, loading: true, data: taskList };
    }
    case TaskListActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as taskListReducer };
