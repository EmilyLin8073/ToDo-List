import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";
import TodoItem from "../TodoItem/TodoItem.component";

/*
  This component is responsible to render all the todo items
*/

const TodoItems = () => {
  const [state, dispatch] = useContext(AppContext);
  const { todoList } = state;

  return (
    <div className="todo-items-container" style={{ marginTop: "50px" }}>
      {todoList.map((todoItem, key) => (
        <TodoItem key={key} todoItem={todoItem} />
      ))}
    </div>
  );
};

export default TodoItems;
