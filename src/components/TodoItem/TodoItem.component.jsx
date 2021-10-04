import React, { useContext, useState } from "react";

import "./TodoItem.styles.scss";
import { AppContext, TodoListActionTypes } from "../../context/AppContext";
import ToDo from "../Todo/Todo.component";
import CustomButton from "../CustomButton/CustomButton.component";

/*
  This component is responsible to render individual todo item.
  This component included todo text, one edit and one delete button
*/

const TodoItem = ({ todoItem }) => {
  const [state, dispatch] = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const [updateTodo, setUpdateTodo] = useState("");

  // Function to handle when delete button are clicked
  const onDeleteTodo = (id) => {
    dispatch({ type: TodoListActionTypes.SET_DELETE_TODO, payload: id });
  };

  // Function to handle when edit button are clicked
  const onEditTodo = (todoToBeUpdate) => {
    setUpdateTodo(todoToBeUpdate.text);
    setIsEditing(!isEditing);

    if (isEditing) {
      dispatch({
        type: TodoListActionTypes.SET_EDIT_TODO,
        payload: { id: todoToBeUpdate.id, text: updateTodo }
      });
    }
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <ToDo inputToDo={updateTodo} setInputToDo={setUpdateTodo} />
      ) : (
        <p className="todo-text">{todoItem.text}</p>
      )}
      <div className="buttons">
        <CustomButton
          onClick={() => onEditTodo(todoItem)}
          style={{ marginRight: "30px" }}>
          {`${isEditing ? "Done" : "Edit"}`}
        </CustomButton>
        <CustomButton onClick={() => onDeleteTodo(todoItem.id)} inverted>
          Delete
        </CustomButton>
      </div>
    </div>
  );
};

export default TodoItem;
