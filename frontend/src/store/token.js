import { createSlice, current } from "@reduxjs/toolkit";

// Initial token's state
const initialTokenState = { token: undefined };

// Token's slice
const tokenSlice = createSlice({
  name: "token",
  initialState: initialTokenState,

  reducers: {
    //Add a param called payload
    getToken(state, action) {
      state.token = action.payload;
      console.log(current(state));
    },
    dropToken(state) {
      state.token = initialTokenState;
      console.log(current(state));
    },
    getState(state) {
      console.log(current(state));
    },
  },
});

export const tokenActions = tokenSlice.actions;
export default tokenSlice.reducer;
