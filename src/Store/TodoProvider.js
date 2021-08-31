import React, { useState, createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todo, setTodo] = useState([]);

  return (
    <TodoContext.Provider value={[todo, setTodo]}>
      {props.children}
    </TodoContext.Provider>
  );
};
