import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
});

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  extraReducers: (builder) => {

      builder.addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      });
      builder.addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cardSlice.reducer;
