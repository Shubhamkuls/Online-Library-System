import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice"
//redux store
const store = configureStore({
    reducer: {
        books : booksReducer,
    },
})
export default store;