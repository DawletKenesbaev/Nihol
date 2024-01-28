import { createSlice } from "@reduxjs/toolkit";


export let modalSlice = createSlice({
   name: 'ModalSlices',
   initialState: {
      profilModalVisibility:false,
      localeModalVisibility:false,
      logOutVisibility:false,

   },
   reducers: {
      switchProfileModal(state){
          state.profilModalVisibility = !state.profilModalVisibility
      },
      switchLocaleModal(state){
        state.localeModalVisibility = !state.localeModalVisibility
      },
      switchLogOutVisibility(state){
         state.logOutVisibility = !state.logOutVisibility
      }
   }



});
export default modalSlice.reducer
export const {switchProfileModal,switchLocaleModal,switchLogOutVisibility} = modalSlice.actions