import React from "react";
import { ACTIONS } from "../App";

function Todo({ todo, dispatch, key }) {
  return (
    <div className="Todo">
      <span
        style={{
          textDecoration: todo.complete ? "line-through" : "none",
          fontSize: "40px",
          margin: "10px 10px 0 0",
          fontWeight: "bold",
        }}
      >
        {todo.name}
      </span>
      <div className="divButton">
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: ACTIONS.TOGGLE_TODO,
              payload: { id: todo.id },
            })
          }
        >
          Toggle
        </button>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: ACTIONS.DELETE_TODO,
              payload: { id: todo.id },
            })
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
