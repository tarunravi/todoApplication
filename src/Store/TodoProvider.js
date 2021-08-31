import React, { useState, createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todo, setTodo] = useState([
    { name: "hi", tags: ["1", "2"], date: "05/23/23" },
    { name: "hi", tags: ["1", "2"], date: "05/23/23" },
    { name: "hi", tags: ["1", "2"], date: "05/23/23" },
    { name: "hi", tags: ["1", "2"], date: "05/23/23" },
    { name: "hi", tags: ["1", "2"], date: "05/23/23" },
    { name: "hi", tags: ["1", "2"], date: "05/23/23" },
  ]);

  return (
    <TodoContext.Provider value={[todo, setTodo]}>
      {props.children}
    </TodoContext.Provider>
  );
};
