import { createSelector } from "reselect";

const selectToDoList = (state) => state.ToDoList;

export const selectToDo = createSelector(
  [selectToDoList],
  (toDoList) => toDoList.updateToDoList
);
