import { ToDoListActionTypes } from "./ToDoList.types";

const INITIAL_STATE = {
  toDo: []
};

export const ToDoListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ToDoListActionTypes.SET_UPDATE_TODO_LIST:
      return {
        ...state,
        toDo: action.payload
      };

    default:
      return state;
  }
};
