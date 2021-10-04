import React, { createContext, useReducer } from "react";

import { editTodo } from "../utils/utils";

export const initialState = {
  todoList: [],
  isEdting: false
};

export const TodoListActionTypes = {
  SET_IS_EDTING: "SET_IS_EDTING",
  SET_ADD_TODO: "SET_ADD_TODO",
  SET_EDIT_TODO: "SET_EDIT_TODO",
  SET_DELETE_TODO: "SET_DELETE_TODO"
};

const reducer = (state, action) => {
  switch (action.type) {
    case TodoListActionTypes.SET_ADD_TODO:
      return {
        ...state,
        todoList: action.payload
      };
    case TodoListActionTypes.SET_EDIT_TODO:
      return {
        ...state,
        todoList: editTodo(state.todoList, action.payload)
      };
    case TodoListActionTypes.SET_DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(
          (toDoItem) => toDoItem.id !== action.payload
        )
      };
    case TodoListActionTypes.SET_IS_EDTING:
      return {
        ...state,
        isEdting: !state.isEdting
      };

    default:
      return state;
  }
};

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
