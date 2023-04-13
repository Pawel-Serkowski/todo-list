import React, { useReducer, useRef } from "react";

import InputBar from "./InputBar";
import TodoTile from "../todos-tiles/TodoTile";
import "./TilesContainer.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.task] };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    case "CHANGE_COMPLETE_STATUS":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, completed: !task.completed } : task
        ),
      };
    case "SET_INPUT_TEXT":
      return { ...state, inputText: action.text };
    default:
      throw new Error();
  }
};

const TilesContainer = () => {
  const id = useRef(-1);

  const [state, dispatch] = useReducer(reducer, { tasks: [], inputText: "" });
  const { tasks, inputText } = state;

  const inputChangeHandler = (event) => {
    dispatch({ type: "SET_INPUT_TEXT", text: event.target.value });
  };
  const inputClickHandler = () => {
    if (!inputText) return;
    id.current = id.current + 1;
    dispatch({
      type: "ADD_TASK",
      task: { completed: false, text: inputText, id: id.current },
    });
    dispatch({ type: "SET_INPUT_TEXT", text: "" });
  };

  return (
    <React.Fragment>
      <InputBar
        changeHandler={inputChangeHandler}
        clickHandler={inputClickHandler}
      />
      <ul className="tiles-container">
        {tasks.map((task) => (
          <TodoTile
            key={task.id}
            completed={task.completed}
            text={task.text}
            completeButtonHandler={() =>
              dispatch({
                type: "CHANGE_COMPLETE_STATUS",
                id: task.id,
              })
            }
            deleteButtonHandler={() =>
              dispatch({ type: "DELETE_TASK", id: task.id })
            }
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default TilesContainer;
