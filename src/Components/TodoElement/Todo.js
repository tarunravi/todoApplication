import React from "react";
import "./Todo.css";
function Todo({ name, tags, date }) {
  return (
    <div className="TodoBox">
      <div className="button" />
      <div className="contents">
        <h1>{name}</h1>
        <h2>{tags}</h2>
      </div>
      <div className="date">
        <h1>{date}</h1>
      </div>
    </div>
  );
}

export default Todo;
