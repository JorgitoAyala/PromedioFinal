import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Localbase from "localbase";

let db = new Localbase("db");

export const getinitialCourses = createAsyncThunk(
  "course/getInitialCourses",
  () => {
    return db.collection("course").get();
  }
);

let initialState = [];

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      state.push(action.payload);
      db.collection("course").add(action.payload);
    },
    editName: (state, action) => {
      const { id, nombre } = action.payload;
      const existingName = state.find((nombre) => nombre.id === id);
      if (existingName) {
        existingName.nombre = nombre.toUpperCase();
        db.collection("course").doc({ id }).update({
          nombre: nombre.toUpperCase(),
        });
      }
    },
    editP1: (state, action) => {
      const { id, p1 } = action.payload;
      const existingP1 = state.find((p1) => p1.id === id);
      if (existingP1) {
        existingP1.p1 = parseFloat(p1) || 0;
        db.collection("course")
          .doc({ id })
          .update({
            p1: parseFloat(p1) || 0,
          });
      }
    },
    editP2: (state, action) => {
      const { id, p2 } = action.payload;
      const existingP2 = state.find((p2) => p2.id === id);
      if (existingP2) {
        existingP2.p2 = parseFloat(p2) || 0;
        db.collection("course")
          .doc({ id })
          .update({
            p2: parseFloat(p2) || 0,
          });
      }
    },
    editP3: (state, action) => {
      const { id, p3 } = action.payload;
      const existingP3 = state.find((p3) => p3.id === id);
      if (existingP3) {
        existingP3.p3 = parseFloat(p3) || 0;
        db.collection("course")
          .doc({ id })
          .update({
            p3: parseFloat(p3) || 0,
          });
      }
    },
    editEf: (state, action) => {
      const { id, ef } = action.payload;
      const existingEf = state.find((ef) => ef.id === id);
      if (existingEf) {
        existingEf.ef = parseFloat(ef) || 0;
        db.collection("course")
          .doc({ id })
          .update({
            ef: parseFloat(ef) || 0,
          });
      }
    },
    editC1: (state, action) => {
      const { id, c1 } = action.payload;
      const existingC1 = state.find((c1) => c1.id === id);
      if (existingC1) {
        const valueC1 = isNaN(parseFloat(c1)) ? null : parseFloat(c1);
        existingC1.c1 = valueC1;
        db.collection("course").doc({ id }).update({
          c1: valueC1,
        });
      }
    },
    editC2: (state, action) => {
      const { id, c2 } = action.payload;
      const existingC2 = state.find((c2) => c2.id === id);
      if (existingC2) {
        const valueC2 = isNaN(parseFloat(c2)) ? null : parseFloat(c2);
        existingC2.c2 = valueC2;
        db.collection("course").doc({ id }).update({
          c2: valueC2,
        });
      }
    },
    editC3: (state, action) => {
      const { id, c3 } = action.payload;
      const existingC3 = state.find((c3) => c3.id === id);
      if (existingC3) {
        const valueC3 = isNaN(parseFloat(c3)) ? null : parseFloat(c3);
        existingC3.c3 = valueC3;
        db.collection("course").doc({ id }).update({
          c3: valueC3,
        });
      }
    },
    editC4: (state, action) => {
      const { id, c4 } = action.payload;
      const existingC4 = state.find((c4) => c4.id === id);
      if (existingC4) {
        const valueC4 = isNaN(parseFloat(c4)) ? null : parseFloat(c4);
        existingC4.c4 = valueC4;
        db.collection("course").doc({ id }).update({
          c4: valueC4,
        });
      }
    },
    editC5: (state, action) => {
      const { id, c5 } = action.payload;
      const existingC5 = state.find((c5) => c5.id === id);
      if (existingC5) {
        const valueC5 = isNaN(parseFloat(c5)) ? null : parseFloat(c5);
        existingC5.c5 = valueC5;
        db.collection("course").doc({ id }).update({
          c5: valueC5,
        });
      }
    },
    editC6: (state, action) => {
      const { id, c6 } = action.payload;
      const existingC6 = state.find((c6) => c6.id === id);
      if (existingC6) {
        const valueC6 = isNaN(parseFloat(c6)) ? null : parseFloat(c6);
        existingC6.c6 = valueC6;
        db.collection("course").doc({ id }).update({
          c6: valueC6,
        });
      }
    },
    editC7: (state, action) => {
      const { id, c7 } = action.payload;
      const existingC7 = state.find((c7) => c7.id === id);
      if (existingC7) {
        const valueC7 = isNaN(parseFloat(c7)) ? null : parseFloat(c7);
        existingC7.c7 = valueC7;
        db.collection("course").doc({ id }).update({
          c7: valueC7,
        });
      }
    },
    editC8: (state, action) => {
      const { id, c8 } = action.payload;
      const existingC8 = state.find((c8) => c8.id === id);
      if (existingC8) {
        const valueC8 = isNaN(parseFloat(c8)) ? null : parseFloat(c8);
        existingC8.c8 = valueC8;
        db.collection("course").doc({ id }).update({
          c8: valueC8,
        });
      }
    },
    editC9: (state, action) => {
      const { id, c9 } = action.payload;
      const existingC9 = state.find((c9) => c9.id === id);
      if (existingC9) {
        const valueC9 = isNaN(parseFloat(c9)) ? null : parseFloat(c9);
        existingC9.c9 = valueC9;
        db.collection("course").doc({ id }).update({
          c9: valueC9,
        });
      }
    },
    editC10: (state, action) => {
      const { id, c10 } = action.payload;
      const existingC10 = state.find((c10) => c10.id === id);
      if (existingC10) {
        const valueC10 = isNaN(parseFloat(c10)) ? null : parseFloat(c10);
        existingC10.c10 = valueC10;
        db.collection("course").doc({ id }).update({
          c10: valueC10,
        });
      }
    },
    clearOne: (state, action) => {
      const { id } = action.payload;
      const newCourses = state.filter((curso) => curso.id !== id);
      db.collection("course").doc({ id }).delete();
      return newCourses;
    },
    clearAll: () => initialState,
    clearAllLocalbase: () => {
      db.collection("course").set([]);
      return;
    },
  },
  extraReducers: {
    [getinitialCourses.pending]: (state, action) => {
      //console.log("Está pendiente");
    },
    [getinitialCourses.fulfilled]: (state, action) => action.payload,
    [getinitialCourses.rejected]: (state, action) => {
      console.error("Ha habido un error en los extra-reducers");
    },
  },
});

//Actions
export const {
  addCourse,
  editName,
  editP1,
  editP2,
  editP3,
  editEf,
  editC1,
  editC2,
  editC3,
  editC4,
  editC5,
  editC6,
  editC7,
  editC8,
  editC9,
  editC10,
  clearOne,
  clearAll,
  clearAllLocalbase,
} = courseSlice.actions;

//Reducer
const courseReducer = courseSlice.reducer;
export default courseReducer;
