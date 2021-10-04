import React from "react";

import "./CustomButton.styles.scss";

/*
  This component is responsible to render custom button
*/

const CustomButton = ({ children, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} custom-button`}
    {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
