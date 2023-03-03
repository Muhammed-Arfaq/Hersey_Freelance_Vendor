import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    show : false,
    data: ''
}

const editProfileModal = createSlice({
  name: 'editProfile',
  initialState: INITIAL_STATE,
  reducers: {
    switchOn: (state, data) => {
      state.show = true
      state.data = data.payload
    },
    switchOff: (state) => {
        state.show = false
    }
  }
})

export const { switchOff, switchOn } = editProfileModal.actions;
export default editProfileModal.reducer;