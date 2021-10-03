import React, { useContext } from "react";

import "./TodoItems.styles.scss";
import { AppContext, TodoListActionTypes } from "../../context/AppContext";
import CustomButton from "../CustomButton/CustomButton.component";

const TodoItems = () => {
  const [state, dispatch] = useContext(AppContext);
  const { todoList } = state;

  const onDeleteTodo = (todoItem) => {
    // todoList.splice(key, 1);

    dispatch({ type: TodoListActionTypes.SET_DELETE_TODO, payload: todoItem });
  };

  return (
    <div className="todo-items-and-buttons-container">
      {todoList.map((todo, key) => {
        return (
          <div className="todo-item" key={key}>
            <p className="todo-text">
              {key + 1}. {todo}
            </p>
            <div className="buttons">
              <CustomButton>Edit</CustomButton>
              <CustomButton onClick={() => onDeleteTodo(todo)} inverted>
                Delete
              </CustomButton>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItems;
