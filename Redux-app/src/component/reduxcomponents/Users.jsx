import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions/userActions";

export default function Users() {
  const { loading, users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(fetchUsers())}>
        Fetch Users
      </button>

      {loading && <p>Loading...</p>}

      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </>
  );
}
