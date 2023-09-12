import { createSlice } from "@reduxjs/toolkit";

const updateLocalStorage = (state) => {
    // Get the current data from local storage or initialize an empty object
    const localStorageData = JSON.parse(localStorage.getItem("incomeData")) || {};
  
    // Get the current month and year
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
  
    // Create a key for the current month and year
    const currentKey = `${currentYear}-${currentMonth}`;
  
    // Initialize an array for the current month if it doesn't exist
    if (!localStorageData[currentKey]) {
      localStorageData[currentKey] = [];
    }
  
    // Add the new income entry to the current month's array
    localStorageData[currentKey].push({
      source: state.source,
      amount: state.amount,
    });
  
    // Store the updated data back in local storage
    localStorage.setItem("incomeData", JSON.stringify(localStorageData));

    const currentTotalSaving  = localStorage.getItem("totalSaving");
    const newTotalSaving = Number(currentTotalSaving) + Number(state.amount);

    // Store the new total income in localStorage
    localStorage.setItem("totalSaving", newTotalSaving.toString());
    //   update total Income
  const currentIncome = localStorage.getItem("totalIncome");
  const newIncome = Number(currentIncome) + Number(state.amount)
  localStorage.setItem("totalIncome",newIncome.toString())
  };

const initialState = {
    source:"",
    amount:"",
    totalIncome:localStorage.getItem("totalIncome") || 0
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