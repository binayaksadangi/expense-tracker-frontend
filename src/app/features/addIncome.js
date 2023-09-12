import { createSlice } from "@reduxjs/toolkit";

const updateLocalStorage = (state) => {
  // Get the current data from local storage or initialize an empty array
  const localStorageData = JSON.parse(localStorage.getItem("incomeData")) || [];

  // Get the current month and year
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Create a key for the current month and year
  const currentKey = `${currentYear}-${currentMonth}`;

  // Find the existing entry for the current month, or create a new one
  const existingEntry = localStorageData.find((entry) => entry.monthYear === currentKey);

  if (existingEntry) {
    // Add the new income entry to the current month's values array
    existingEntry.values.push({
      source: state.source,
      amount: state.amount,
    });
  } else {
    // Create a new entry for the current month
    const newEntry = {
      monthYear: currentKey,
      values: [
        {
          source: state.source,
          amount: state.amount,
        },
      ],
    };
    localStorageData.push(newEntry);
  }

  // Store the updated data back in local storage
  localStorage.setItem("incomeData", JSON.stringify(localStorageData));

  const currentTotalSaving = localStorage.getItem("totalSaving");
  const newTotalSaving = Number(currentTotalSaving) + Number(state.amount);

  // Store the new total income in localStorage
  localStorage.setItem("totalSaving", newTotalSaving.toString());

  // Update total Income
  const currentIncome = localStorage.getItem("totalIncome");
  const newIncome = Number(currentIncome) + Number(state.amount);
  localStorage.setItem("totalIncome", newIncome.toString());
};

const initialState = {
    source:"",
    amount:"",
    totalIncome:localStorage.getItem("totalIncome") || 0,
    incomeData:JSON.parse(localStorage.getItem("incomeData"))  || []
}

const addIncomeSlice = createSlice({
    name:"addIncome",
    initialState,
    reducers:{
        addIncome:(state,action)=>{
            state.source = action.payload.source
            state.amount = action.payload.amount
            updateLocalStorage(state);
            state.totalIncome = localStorage.getItem("totalIncome");
        }
    }
})
export const { addIncome } = addIncomeSlice.actions;

export default addIncomeSlice.reducer;

