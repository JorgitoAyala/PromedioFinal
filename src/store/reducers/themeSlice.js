import { createSlice } from "@reduxjs/toolkit";

const lightFeatures = {
  bg_one: "bg-cyan-300",
  bg_two: "bg-slate-100",
  bg_three: "bg-gray-200",
  bg_four: "bg-indigo-200",
  font: "text-slate-800",
  border: "border-slate-800",
  subtitles: ["text-indigo-500", "text-violet-400"],
  btn: ["bg-indigo-500", "hover:bg-indigo-600"],
  btn_font: "text-slate-100",
  btn_border: ["border-indigo-500", "bg-slate-100"],
};

const darkFeatures = {
  bg_one: "bg-slate-500",
  bg_two: "bg-slate-800",
  bg_three: "bg-gray-700",
  bg_four: "bg-orange-200",
  font: "text-slate-100",
  border: "border-slate-100",
  subtitles: ["text-orange-400", "text-yellow-200"],
  btn: ["bg-orange-500", "hover:bg-orange-600"],
  btn_font: "text-slate-800",
  btn_border: ["border-orange-400", "bg-slate-800"],
};

const themeStorage = localStorage.getItem("theme") === "true";

const initialState = {
  isDark: themeStorage || false,
  themes: themeStorage ? darkFeatures : lightFeatures,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeType: (state, action) => {
      if (state.isDark) {
        state.isDark = false;
        localStorage.setItem("theme", JSON.stringify(state.isDark));
        state.themes = lightFeatures;
      } else {
        state.isDark = true;
        localStorage.setItem("theme", JSON.stringify(state.isDark));
        state.themes = darkFeatures;
      }
    },
  },
});

//Actions
export const { themeType } = themeSlice.actions;

//Reducer
const themeReducer = themeSlice.reducer;
export default themeReducer;
