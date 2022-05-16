import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./reducers/courseSlice";
import modalReducer from "./reducers/modalSlice";
import themeReducer from "./reducers/themeSlice";

// STEP #1
// Create the store
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    course: courseReducer,
    modal: modalReducer,
  },
});
