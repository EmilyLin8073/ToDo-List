import { ToDoListActionTypes } from "./ToDoList.types";

export const setUpdateToDoList = (toDoList) => ({
  type: ToDoListActionTypes.SET_UPDATE_TODO_LIST,
  payload: toDoList
});
