import React, { useState, useContext } from "react";

import "./TodoList.styles.scss";
import { AppContext, TodoListActionTypes } from "../../context/AppContext";
import CustomButton from "../CustomButton/CustomButton.component";
import ToDo from "../Todo/Todo.component";
import TodoItems from "../TodoItems/TodoItems.component";

const TodoList = () => {
  const [state, dispatch] = useContext(AppContext);
  const { todoList } = state;
  const [inputToDo, setInputToDo] = useState("");

  const onAddTodoList = () => {
    const todoObj = {
      id: todoList.length,
      text: inputToDo
    };

    dispatch({
      type: TodoListActionTypes.SET_ADD_TODO,
      payload: [...todoList, todoObj]
    });
    setInputToDo("");
  };

  return (
    <div className="todo-list-container">
      <div className="todo-container">
        <ToDo inputToDo={inputToDo} setInputToDo={setInputToDo} />
        <div className="add-todo-button">
          <CustomButton onClick={onAddTodoList}>Add ToDo</CustomButton>
        </div>
      </div>
      <TodoItems />
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   todoList: state.todoList
// });

// const mapDispatchToProps = (dispatch) => ({
//   setAddTodo: (todoList) => dispatch(setAddTodo(todoList)),
//   setEditTodo: (todoList) => dispatch(setEditTodo(todoList)),
//   setDeleteTodo: (todoList) => dispatch(setDeleteTodo(todoList))
// });

export default TodoList;
