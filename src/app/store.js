import { configureStore } from "@reduxjs/toolkit";
import addIncomeSlice from  './features/addIncome'
import expenseSlice from "./features/expenseSlice";
import savingSlice from "./features/savingSlice";

const store = configureStore({
    reducer:{
        expense:expenseSlice,
        addIncome:addIncomeSlice,
        saving:savingSlice
    }
})

export default store