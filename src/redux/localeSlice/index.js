import { createSlice } from "@reduxjs/toolkit";


const localeSlice = createSlice({
    name: 'localeSlice',
    initialState: {
        lang:'en'
    }, 

    reducers: {
       changeLang(state,{payload}){
          state.lang = payload
       }
    }
})
export default localeSlice.reducer
export const {changeLang} = localeSlice.actions