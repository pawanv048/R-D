import TodoItem from "./TodoItem";


function TodoList({ todos, deleteTodo, setEditTodo }) {
  return (
    <div className="todo-list">
      {todos.length === 0 && <p>No todos yet</p>}

      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          setEditTodo={setEditTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
