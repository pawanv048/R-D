import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(addTodo("Learn RTK"))}>
        Add Todo
      </button>

      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </>
  );
}
