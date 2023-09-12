import { configureStore } from "@reduxjs/toolkit";
import addIncomeSlice from  './features/addIncome'

const store = configureStore({
    reducer:{

        addIncome:addIncomeSlice
    }
})

export default store