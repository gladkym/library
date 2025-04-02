import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  title: "",
};

const filterSlice = createSlice({
    name: "filter", //название редюсера
    initialState: initialState, // начальное состояние
    reducers: {
        setTitleFilter: (state, action) => {
        // return {...state, title: action.payload}
        // тоже самое, что и выше, но так можно только в toolkit
        state.title = action.payload
        },
        resetFilters: (state) => {
            return  initialState
        }
    },
})


export const {setTitleFilter, resetFilters} = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;
// не очень понятно, что это

export default filterSlice.reducer;
