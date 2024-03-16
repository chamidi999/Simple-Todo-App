import React, { useState } from "react";

export const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() !== "") { // Check if the input value is not just whitespace
      editTodo(value, task.id); // Call the addTodo function from the parent component to add a new task
      setValue(""); // Clear the input field
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn-act">
        Update Task
      </button>
    </form>
  );

};
