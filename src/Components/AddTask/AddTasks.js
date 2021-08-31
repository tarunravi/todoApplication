import React, { useState, useContext } from "react";
import "./AddTask.css";
import { TodoContext } from "../../Store/TodoProvider";

function AddTasks() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [tempTag, setTempTags] = useState("");
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
            onChange={(e) => setTempTags(e.target.value)}
            value={tempTag}
            placeholder="Type Tag Name"
            type="text"
          ></input>

          <div
            className={tempTag === "" ? "addButton nope" : "addButton yes "}
            onClick={() => {
              if (tempTag !== "") {
                if (tags === "") {
                  setTags(tempTag);
                } else {
                  setTags(tags + ", " + tempTag);
                }

                setTempTags("");
              }
            }}
          >
            Add Task
          </div>
        </div>
      </div>

      <h3>{tags}</h3>
      <div className="date">
        <h3>Date</h3>
        <input
          onChange={(e) => setDate(e.target.value)}
          value={date}
          type="date"
        ></input>
      </div>

      <div
        className={
          title === "" || tags === "" || date === ""
            ? "create nope"
            : "create yes"
        }
        onClick={() => {
          if (title !== "" && tags !== "" && date !== "") {
            setTodo([
              ...todo,
              {
                name: title,
                tags: tags,
                date: date,
                keyy: (Math.random() + 1).toString(36).substring(7),
              },
            ]);

            setTitle("");
            setDate("");
            setTags("");
          }
        }}
      >
        <div className="createButton">Create</div>
      </div>
    </div>
  );
}

export default AddTasks;
