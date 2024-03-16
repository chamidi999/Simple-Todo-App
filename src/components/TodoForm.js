import React, { useState } from "react";

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") { // Check if the input value is not just whitespace
      addTodo(value); // Call the addTodo function from the parent component to add a new task
      setValue(""); // Clear the input field
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button 
        type="submit" 
        className={`${value.trim() ? "todo-btn-act" : "todo-btn-deact"}`}
        disabled={!value.trim()}
      >
        Add Task
      </button>
    </form>
  );

};
