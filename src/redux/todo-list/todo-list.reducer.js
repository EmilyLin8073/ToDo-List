import { ToDoListActionTypes } from "./todo-list.types";

const INITIAL_STATE = {
  toDoList: []
};

export const ToDoListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ToDoListActionTypes.SET_UPDATE_TODO_LIST:
      return {
        ...state,
        toDoList: action.payload
      };

    default:
      return state;
  }
};
