import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ApiData{
    err: string;
    load: boolean;
    apidt:any[]
}
const initialState: ApiData={
    err:"",
    load: false,
    apidt:[]
}
 
export const MfReducer = createSlice({
    name: "app_mfe",
    initialState,
    reducers: {
        error: (state, action: PayloadAction<any>) => {
            state.load = false,
                state.err=action.payload
        },
        load: (state) => {
            state.load=true
        },
        getData: (state, action: PayloadAction<any>) => {
            state.load = false
            state.apidt=action.payload
        }
    }
})
export const { error, load, getData } = MfReducer.actions
export default MfReducer.reducer