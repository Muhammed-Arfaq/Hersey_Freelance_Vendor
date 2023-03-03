import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    show : false
}

const gigDetails = createSlice({
  name: 'gig',
  initialState: INITIAL_STATE,
  reducers: {
    setCreateSwitchOn: (state) => {
      state.show = true
    },
    setCreateSwitchOff: (state) => {
        state.show = false
    }
  }
})

export const { setCreateSwitchOff, setCreateSwitchOn } = gigDetails.actions;
export default gigDetails.reducer;