import React from "react";

import "./Buttons.css";

const CompleteButton = (props) => {
  return (
    <button
      className={`complete-button ${
        !props.completed ? "completed" : "not-completed"
      }`}
      type="button"
      onClick={props.completeButtonHandler}
    >
      {!props.completed ? "Complete" : "Not Completed"}
    </button>
  );
};

export default CompleteButton;
