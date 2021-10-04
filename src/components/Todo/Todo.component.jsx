import React from "react";

import "./todo.styles.scss";
import FormInput from "../FormInput/FormInput.component";

const ToDo = ({ inputToDo, setInputToDo }) => {
  const handleChange = (e) => {
    setInputToDo(e.target.value);
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
    </div>
  );
};

export default ToDo;
