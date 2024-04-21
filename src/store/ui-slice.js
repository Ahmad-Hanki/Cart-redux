import { createSlice } from "@reduxjs/toolkit";

const uiInitial = {
    cartIsVisible: false,

}

const uiSlice = createSlice ( {
    name: 'ui',
    initialState : uiInitial , 
    reducers : {
          toggle (state) {
            state.cartIsVisible = !state.cartIsVisible
          }
    }
} );

export const uiAction = uiSlice.actions
const uiReducer = uiSlice.reducer;
export default uiReducer;

