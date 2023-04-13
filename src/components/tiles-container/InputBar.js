import React from "react";

import "./InputBar.css";

const InputBar = (props) => {
  const createButtonHandler = () => {
    const input = document.getElementById("input-bar");
    input.value = "";
    props.clickHandler();
  };

  return (
    <div className="input-bar">
      <div></div>
      <input
        type="text"
        placeholder="Type a todo"
        id="input-bar"
        onChange={(event) => props.changeHandler(event)}
      />
      <button
        className="create-todo"
        onClick={createButtonHandler}
        type="button"
      >
        Create
      </button>
    </div>
  );
};

export default InputBar;
