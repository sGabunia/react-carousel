import React from "react";
import "./button.css";

const Button = ({ direction, handleButtonClick }) => {
  if (direction === "previous") {
    return (
      <span onClick={handleButtonClick} className="material-icons prev-arrow">
        arrow_back_ios
      </span>
    );
  }

  if (direction === "next") {
    return (
      <span onClick={handleButtonClick} className="material-icons next-arrow">
        arrow_forward_ios
      </span>
    );
  }
};

export default Button;
