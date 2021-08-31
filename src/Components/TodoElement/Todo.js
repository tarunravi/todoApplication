import React, { useContext } from "react";
import "./Todo.css";
import { TodoContext } from "../../Store/TodoProvider";

function Todo({ name, tags, date, keyy }) {
  const [todo, setTodo] = useContext(TodoContext);

  return (
    <div className="TodoBox">
      <div
        className="button"
        onClick={() => {
          setTodo(
            todo.filter(function (obj) {
              return obj.keyy !== keyy;
            })
          );
        }}
      />
      <div className="contents">
        <h1>{name}</h1>
        <h2>{tags}</h2>
      </div>
      <div className="datee">
        <h1>{date}</h1>
      </div>
    </div>
  );
}

export default Todo;
