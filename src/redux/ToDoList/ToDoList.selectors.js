import { createSelector } from "reselect";

const selectToDoList = (state) => state.toDoList;

export const selectToDo = createSelector(
  [selectToDoList],
  (toDoList) => toDoList.toDo
);
