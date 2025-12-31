function TodoItem({ todo, deleteTodo, setEditTodo }) {
  return (
    <div className="todo-item">
      <text>{todo.text}</text>
      <div>
        <button className="edit" onClick={() => setEditTodo(todo)}>
          Edit
        </button>
        <button className="delete" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
