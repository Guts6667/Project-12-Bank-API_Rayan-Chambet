import { createSlice, current } from "@reduxjs/toolkit";

const initialTokenState = { token: undefined };

const tokenSlice = createSlice({
  name: "token",
  initialState: initialTokenState,

  reducers: {
    getToken(state, payload) {
      state.token = window.localStorage.token;
      console.log(current(state));
    },
    dropToken(state) {
      state.token = undefined;
    },
    getState(state) {
      console.log(state.token);
    },
  },
});

export const tokenActions = tokenSlice.actions;
export default tokenSlice.reducer;
