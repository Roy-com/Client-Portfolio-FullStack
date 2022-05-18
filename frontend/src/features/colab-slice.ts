//DUCKS pattern
import {ImgUrl} from "../Components/type"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface colabState{
    value: Array<ImgUrl>;
}
const initialState:colabState={
    value: [],
}
const colabSlice = createSlice({
    name: 'colab',
    initialState,
    reducers: {
        setColab(state, action: PayloadAction<Array<ImgUrl>>) {
            state.value = action.payload;
        }
    }
});
//creatSlice generated actions creator automatically

export const { setColab} = colabSlice.actions;
export default colabSlice.reducer;