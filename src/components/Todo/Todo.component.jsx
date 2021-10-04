import React from "react";

import "./todo.styles.scss";
import FormInput from "../FormInput/FormInput.component";

/*
  This component is responsible to render todo form input
*/

const ToDo = ({ inputToDo, setInputToDo }) => {
  // Callback function to handle input form changes
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
