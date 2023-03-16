import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    show : false,
    data: {}
  }
  
  const EditGigDetails = createSlice({
  name: 'editGig',
  initialState: INITIAL_STATE,
  reducers: {
    setCreateModalOn: (state, data) => {
      state.data = data.payload
      state.show = true
    },
    setCreateModalOff: (state) => {
        state.show = false
    }
  }
})

export const { setCreateModalOff, setCreateModalOn } = EditGigDetails.actions;
export default EditGigDetails.reducer;