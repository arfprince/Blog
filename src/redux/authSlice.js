import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  currentSessionUser: JSON.parse(localStorage.getItem("currentSessionUser")) || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.currentSessionUser = action.payload;
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("currentSessionUser", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.currentSessionUser = null;
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("currentSessionUser");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
