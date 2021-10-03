import React, { useState, useContext } from "react";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import "./TodoList.styles.scss";
import { AppContext, TodoListActionTypes } from "../../context/AppContext";
import CustomButton from "../CustomButton/CustomButton.component";
import { selectTodos } from "../../redux/TodoList/TodoList.selectors";
import {
  setAddTodo,
  setEditTodo,
  setDeleteTodo
} from "../../redux/TodoList/TodoList.actions";
import ToDo from "../Todo/Todo.component";
import TodoItems from "../TodoItems/TodoItems.component";

const TodoList = () => {
  const [inputToDo, setInputToDo] = useState("");
  const [state, dispatch] = useContext(AppContext);
  const { todoList } = state;

  console.log("toDo", todoList);

  return (
    <div className="todo-list-container">
      <ToDo inputToDo={inputToDo} setInputToDo={setInputToDo} />
      <TodoItems />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todoList: state.todoList
});

const mapDispatchToProps = (dispatch) => ({
  setAddTodo: (todoList) => dispatch(setAddTodo(todoList)),
  setEditTodo: (todoList) => dispatch(setEditTodo(todoList)),
  setDeleteTodo: (todoList) => dispatch(setDeleteTodo(todoList))
});

export default TodoList;
