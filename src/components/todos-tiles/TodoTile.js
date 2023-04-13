import React from "react";

import CompleteButton from "./CompleteButton";
import DeleteButton from "./DeleteButton";

import "./TodoTile.css";

const TodoTile = (props) => {
  return (
    <li className={`todo-tile ${props.completed ? "completed" : ""}`}>
      {props.text}
      <div className="buttons">
        <DeleteButton deleteButtonHandler={props.deleteButtonHandler} />
        <CompleteButton
          completed={props.completed}
          completeButtonHandler={props.completeButtonHandler}
        />
      </div>
    </li>
  );
};

export default TodoTile;
