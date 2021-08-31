import React, { useState, useContext } from "react";
import "./AddTask.css";
import { TodoContext } from "../../Store/TodoProvider";

function AddTasks() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [date, setDate] = useState("");

  const [todo, setTodo] = useContext(TodoContext);

  return (
    <div className="AddTasks">
      <div className="title">
        <h3>Title</h3>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Type Task Title"
          type="text"
        ></input>
      </div>

      <div className="tags">
        <h3>Tags</h3>
        <div className="inputButton">
          <input
            className="tag"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
            placeholder="Type Tag Name"
            type="text"
          ></input>

          <div className="addButton">Add Task</div>
        </div>
      </div>

      <div className="date">
        <h3>Date</h3>
        <input
          onChange={(e) => setDate(e.target.value)}
          value={date}
          type="date"
        ></input>
      </div>

      <div
        className="create"
        onClick={() => {
          if (title !== "" && tags !== "" && date !== "")
            setTodo([...todo, { name: title, tags: tags, date: date }]);
        }}
      >
        <div className="createButton">Create</div>
      </div>
    </div>
  );
}

export default AddTasks;
