import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    show : false,
    data: {}
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
    },
    setData: (state, data) => {
      state.data = data.payload
    }
  }
})

export const { switchOff, switchOn, setData } = editProfileModal.actions;
export default editProfileModal.reducer;