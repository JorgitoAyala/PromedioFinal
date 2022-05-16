import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpenInfo: false,
  isOpenChart: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      if (action.payload === "info") {
        state.isOpenInfo = true;
      }
      if (action.payload === "chart") {
        state.isOpenChart = true;
      }
    },
    closeModal: (state, action) => {
      if (action.payload === "info") {
        state.isOpenInfo = false;
      }
      if (action.payload === "chart") {
        state.isOpenChart = false;
      }
    },
  },
});

//Actions
export const { openModal, closeModal } = modalSlice.actions;

//Reducer
const modalReducer = modalSlice.reducer;
export default modalReducer;
