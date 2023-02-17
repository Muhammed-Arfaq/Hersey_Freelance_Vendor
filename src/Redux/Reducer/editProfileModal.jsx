import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    show : false
}

const editProfileModal = createSlice({
  name: 'editProfile',
  initialState: INITIAL_STATE,
  reducers: {
    switchOn: (state) => {
      state.show = true
    },
    switchOff: (state) => {
        state.show = false
    }
  }
})

export const { switchOff, switchOn } = editProfileModal.actions;
export default editProfileModal.reducer;