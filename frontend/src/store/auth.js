import { createSlice, current } from "@reduxjs/toolkit";

const initialAuthState = { isAuth: false };
const authSlice = createSlice({
  name: "auth",
  //initialState is a part of redux syntax therefore it's mandatory to use this name.
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
      console.log(current(state));
    },
    logout(state) {
      state.isAuth = false;
      console.log(current(state));
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
