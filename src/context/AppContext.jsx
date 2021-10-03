import React, { createContext, useReducer } from "react";

import { deleteTodo } from "../utils/utils";

export const initialState = {
  todoList: []
};

export const TodoListActionTypes = {
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
        todoList: action.payload
      };
    case TodoListActionTypes.SET_DELETE_TODO:
      return {
        ...state,
        todoList: deleteTodo(state.todoList, action.payload)
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
