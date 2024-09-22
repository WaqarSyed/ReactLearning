import { configureStore } from "@reduxjs/toolkit";
import authSlice, { login, logout } from "../store/authSlice";
import reducer from "../store/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    //TODO: add more slice for posts
  },
});

export default store;
