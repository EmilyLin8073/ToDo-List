import { TodoListActionTypes } from "./TodoList.types";

const INITIAL_STATE = {
  todoList: []
};

export const TodoListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodoListActionTypes.SET_ADD_TODO:
      return {
        ...state,
        todoList: state.todoList.push(action.payload)
      };
    case TodoListActionTypes.SET_EDIT_TODO:
      return {
        ...state,
        todoList: action.payload
      };
    case TodoListActionTypes.SET_DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(
          (toDoItem) => toDoItem.id !== action.payload.id
        )
      };

    default:
      return state;
  }
};
