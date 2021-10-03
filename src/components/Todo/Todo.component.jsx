import React, { useContext } from "react";

import "./todo.styles.scss";
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";
import { AppContext, TodoListActionTypes } from "../../context/AppContext";

const ToDo = ({ inputToDo, setInputToDo }) => {
  const [state, dispatch] = useContext(AppContext);
  const { todoList } = state;
  let temp = [];

  const handleChange = (e) => {
    setInputToDo(e.target.value);
  };

  const onAddTodoList = () => {
    temp.push(inputToDo);

    dispatch({
      type: TodoListActionTypes.SET_ADD_TODO,
      payload: [...todoList, temp]
    });
    setInputToDo("");
  };

  return (
    <div className="todo-container">
      <FormInput
        name="Todo"
        type="text"
        handleChange={handleChange}
        value={inputToDo}
        label="Todo"
        required
      />
      <div className="add-todo-button">
        <CustomButton onClick={onAddTodoList}>Add ToDo</CustomButton>
      </div>
    </div>
  );
};

export default ToDo;
