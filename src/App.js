import { mapValuesLimit } from "async";
import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import AddTasks from "./Components/AddTask/AddTasks";
import TodoElement from "./Components/TodoElement/Todo";
import { TodoContext } from "./Store/TodoProvider";

function App() {
  const [todo, setTodo] = useContext(TodoContext);

  return (
    <div className="App">
      <AddTasks />
      <div className="todoBoxes">
        {todo.map((value, index) => {
          return (
            <TodoElement
              name={value.name}
              tags={value.tags}
              date={value.date}
              keyy={value.keyy}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
