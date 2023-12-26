import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { thunk } from "redux-thunk";

const middlewares = [thunk];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (m) => m().concat(middlewares),
});
