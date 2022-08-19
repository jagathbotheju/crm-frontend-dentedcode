import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: user ? user : null,
    error: "",
    success: false,
    loading: false,
    message: "",
  },
  reducers: {
    reset: (state) => {
      state.error = "";
      state.success = false;
      state.loading = false;
      state.message = "";
    },
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
