import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return res.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    users: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      });
  },
});

export default userSlice.reducer;
