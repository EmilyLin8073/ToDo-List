import { TodoListActionTypes } from "./TodoList.types";

export const setAddTodo = (todo) => ({
  type: TodoListActionTypes.SET_ADD_TODO,
  payload: todo
});

export const setEditTodo = (todo) => ({
  type: TodoListActionTypes.SET_EDIT_TODO,
  payload: todo
});

export const setDeleteTodo = (todo) => ({
  type: TodoListActionTypes.SET_DELETE_TODO,
  payload: todo
});
