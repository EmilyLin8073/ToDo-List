import React, { useState, useContext, useEffect } from "react";

import "./TodoList.styles.scss";
import { AppContext, TodoListActionTypes } from "../../context/AppContext";
import CustomButton from "../CustomButton/CustomButton.component";
import ToDo from "../Todo/Todo.component";
import TodoItems from "../TodoItems/TodoItems.component";

const TodoList = () => {
  const [state, dispatch] = useContext(AppContext);
  const { todoList } = state;
  const [inputToDo, setInputToDo] = useState("");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const onAddTodoList = () => {
    if (inputToDo === "") {
      window.alert("Todo cannot be empty string");
    } else {
      const todoObj = {
        id: todoList.length,
        text: inputToDo
      };

      dispatch({
        type: TodoListActionTypes.SET_ADD_TODO,
        payload: [...todoList, todoObj]
      });

      setInputToDo("");
    }
  };

  return (
    <div className="todo-list-container">
      <div className="create-todo-container">
        <ToDo inputToDo={inputToDo} setInputToDo={setInputToDo} />
        <div className="add-todo-button">
          <CustomButton onClick={onAddTodoList}>Add ToDo</CustomButton>
        </div>
      </div>
      <TodoItems />
    </div>
  );
};

export default TodoList;
