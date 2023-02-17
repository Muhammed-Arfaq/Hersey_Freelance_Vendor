import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    show : false
}

const viewGigDetails = createSlice({
  name: 'viewGig',
  initialState: INITIAL_STATE,
  reducers: {
    modalOn: (state) => {
      state.show = true
    },
    modalOff: (state) => {
        state.show = false
    }
  }
})

export const { modalOff, modalOn } = viewGigDetails.actions;
export default viewGigDetails.reducer;