import React, { useContext } from "react";

import "./TodoItems.styles.scss";
import { AppContext } from "../../context/AppContext";
import TodoItem from "../TodoItem.component.jsx/TodoItem.component";

const TodoItems = () => {
  const [state, dispatch] = useContext(AppContext);
  const { todoList } = state;

  console.log("todolist", todoList);

  return (
    <div className="todo-items-container">
      {todoList.map((todoItem, key) => (
        <TodoItem key={key} todoItem={todoItem} />
      ))}
    </div>
  );
};

export default TodoItems;
