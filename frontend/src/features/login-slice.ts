//DUCKS pattern

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginState{
    value: boolean;
}
const initialState:loginState={
    value: true,
}
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        //login
        loggedin(state) {
            state.value = true;
        },
        //logout
        loggedout(state) {
            state.value = false;
        },
        setLogin(state, action: PayloadAction<boolean>) {
            state.value = action.payload;
        }
    }
});
//creatSlice generated actions creator automatically

export const { loggedin, loggedout, setLogin } = loginSlice.actions;
export default loginSlice.reducer;