// savingsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalSavings: localStorage.getItem("totalSavings") || 0
};

const savingsSlice = createSlice({
  name: "savings",
  initialState,
  reducers: {
    updateSavings: (state, action) => {
      state.totalSavings = action.payload;
      localStorage.setItem("totalSavings", action.payload);
    }
  }
});

export const { updateSavings } = savingsSlice.actions;

export default savingsSlice.reducer;
