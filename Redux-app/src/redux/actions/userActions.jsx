import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_USERS_START" });

    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    dispatch({
      type: "FETCH_USERS_SUCCESS",
      payload: res.data,
    });
  };
};
