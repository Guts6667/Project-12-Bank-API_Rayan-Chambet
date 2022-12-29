import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import tokenReducer from "./token";

const store = configureStore({
  reducer: { auth: authReducer, token: tokenReducer },
});

export default store;
