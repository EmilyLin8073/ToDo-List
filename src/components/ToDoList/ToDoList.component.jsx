import React from "react";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import "./ToDoList.styles.scss";
import CustomButton from "../CustomButton/CustomButton.component";
import { selectToDo } from "../../redux/ToDoList/ToDoList.selectors";
import { setUpdateToDoList } from "../../redux/ToDoList/ToDoList.actions";

const ToDoList = () => {
  const addToDoList = () => {};
  return (
    <div className="todo-list-container">
      <CustomButton onClick={addToDoList}>Add ToDo</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  toDo: selectToDo
});

const mapDispatchToProps = (dispatch) => ({
  setUpdateToDoList: (toDoList) => dispatch(setUpdateToDoList(toDoList))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
