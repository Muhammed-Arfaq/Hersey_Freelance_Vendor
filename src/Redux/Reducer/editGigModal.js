import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    show : false,
    data: ''
}

const EditGigDetails = createSlice({
  name: 'editGig',
  initialState: INITIAL_STATE,
  reducers: {
    setCreateModalOn: (state, data) => {
      state.show = true
      state.data = data.payload
    },
    setCreateModalOff: (state) => {
        state.show = false
    }
  }
})

export const { setCreateModalOff, setCreateModalOn } = EditGigDetails.actions;
export default EditGigDetails.reducer;