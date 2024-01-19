import { createSlice } from "@reduxjs/toolkit";


export let modalSlice = createSlice({
   name: 'ModalSlices',
   initialState: {
      profilModalVisibility:false,
      localeModalVisibility:false,

   },
   reducers: {
      switchProfileModal(state){
          state.profilModalVisibility = !state.profilModalVisibility
      },
      switchLocaleModal(state){
        state.localeModalVisibility = !state.localeModalVisibility
    }
   }



});
export default modalSlice.reducer
export const {switchProfileModal,switchLocaleModal} = modalSlice.actions