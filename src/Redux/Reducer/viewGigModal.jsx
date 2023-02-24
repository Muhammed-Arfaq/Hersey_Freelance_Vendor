import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    show : false,
    data: ''
}

const viewGigDetails = createSlice({
  name: 'viewGig',
  initialState: INITIAL_STATE,
  reducers: {
    modalOn: (state, data) => {
      state.show = true
      state.data = data.payload
    },
    modalOff: (state) => {
        state.show = false
    }
  }
})

export const { modalOff, modalOn } = viewGigDetails.actions;
export default viewGigDetails.reducer;