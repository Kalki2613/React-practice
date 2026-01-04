import { configureStore } from '@reduxjs/toolkit'
import todoRducer from "../features/tudo/tudoSlice.js";

export const store = configureStore({
    reducer:todoRducer,
})