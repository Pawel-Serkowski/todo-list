import React from "react";

import "./Buttons.css";

const DeleteButton = (props) => {
  return (
    <button
      className="delete-button"
      onClick={props.deleteButtonHandler}
      type="button"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
