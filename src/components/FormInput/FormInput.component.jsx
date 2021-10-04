import React from "react";

import "./FormInput.styles.scss";

/*
  This component is responsible to render form input
*/

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="to-do-form">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
