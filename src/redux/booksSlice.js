//creating slice

import { createSlice } from "@reduxjs/toolkit";
import { books as intialBooks } from "../utils/Books";

const bookSlice = createSlice({
    name: "books",
    initialState: intialBooks,
    reducers: {
        addBook: (state, action)=>{
            state.push(action.payload);
        },
    },
});

export const {addBook} = bookSlice.actions;
export default bookSlice.reducer;