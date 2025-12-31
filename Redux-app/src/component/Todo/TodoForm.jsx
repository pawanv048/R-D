import { useState, useEffect } from "react";

function TodoForm({ addTodo, editTodo, updateTodo }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editTodo) {
      setText(editTodo.text);
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    if (editTodo) {
      updateTodo(editTodo.id, text);
    } else {
      addTodo(text);
    }

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Enter todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>{editTodo ? "Update" : "Add"}</button>
    </form>
  );
}

export default TodoForm;
