// Create slice for the profile
import { createSlice, current } from "@reduxjs/toolkit";

// Initial state for profile
const initialProfileState = {
  firstName: undefined,
  lastName: undefined,
  // email: undefined,
  // id: undefined,
  // createdAt: undefined,
  // updatedAt: undefined,
};

// Profile's slice
const profileSlice = createSlice({
  name: "profile",
  initialState: initialProfileState,
  reducers: {
    // getProfile(state, action) {
    //   state.firstName = action.payload.firstName;
    //   state.lastName = action.payload.lastName;
    //   state.email = action.payload.email;
    //   state.id = action.payload.id;
    //   state.createdAt = action.payload.createdAt;
    //   state.updatedAt = action.payload.updatedAt;
    //   console.log(current(state));
    // },
    getNames(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      console.log(current(state));
    },
  },
});

// Export the actions
export const profileActions = profileSlice.actions;
// Export the reducers of the slice
export default profileSlice.reducer;
