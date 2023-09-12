// expenseSlice.js
import { createSlice } from "@reduxjs/toolkit";

const updateExpenseLocalStorage = (state) => {
    const localStorageData = JSON.parse(localStorage.getItem("expenseData")) || [];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const currentKey = `${currentYear}-${currentMonth}`;
  
    // Find the entry with the currentKey, or create a new entry
    let found = false;
    for (let i = 0; i < localStorageData.length; i++) {
      if (localStorageData[i].monthYear === currentKey) {
        localStorageData[i].value.push({
          spentOn: state.spentOn,
          amountSpent: state.amountSpent,
        });
        found = true;
        break;
      }
    }
  
    if (!found) {
      localStorageData.push({
        monthYear: currentKey,
        value: [
          {
            spentOn: state.spentOn,
            amountSpent: state.amountSpent,
          },
        ],
      });
    }
  
    localStorage.setItem("expenseData", JSON.stringify(localStorageData));
  
    // Update total Spending
    const currentSpending = localStorage.getItem("totalSpeding");
    const newSpending = Number(currentSpending) + Number(state.amountSpent);
    localStorage.setItem("totalSpeding", newSpending.toString());
  
    // Update Savings
    const currentTotalSaving = localStorage.getItem("totalSaving");
    const newTotalSaving = Number(currentTotalSaving) - Number(state.amountSpent);
  
    // Store the new total income in localStorage
    localStorage.setItem("totalSaving", newTotalSaving.toString());
  };

const initialState = {
  spentOn: "",
  amountSpent: "",
  totalExpenses: localStorage.getItem("totalExpenses") || 0,
  expenseData: JSON.parse(localStorage.getItem("expenseData"))  || []
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.spentOn = action.payload.spentOn;
      state.amountSpent = action.payload.amountSpent;
      updateExpenseLocalStorage(state);
      state.totalExpenses = localStorage.getItem("totalExpenses");
    }
  }
});

export const { addExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
const format = [
    {
        monthYear: '2023-8',
        value:[{"spentOn":"house rent","amountSpent":"5650"}]
    }
]