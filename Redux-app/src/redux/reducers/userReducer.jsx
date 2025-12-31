const initialState = {
  loading: false,
  users: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_START":
      return { ...state, loading: true };

    case "FETCH_USERS_SUCCESS":
      return { loading: false, users: action.payload };

    default:
      return state;
  }
};
