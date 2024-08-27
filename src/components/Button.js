import React from "react";
import "../stylesheets/button.css";
function Button({ text, clickButton, clickHandler}){
  return(
    <button className = { clickButton ? "click-btn" : "reset-btn" }
    onClick = { clickHandler }>
      { text }
    </button>

  );
}

export default Button;