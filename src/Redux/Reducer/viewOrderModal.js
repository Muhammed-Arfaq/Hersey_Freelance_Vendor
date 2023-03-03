import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    show : false,
    data: ''
}

const viewOrderModal = createSlice({
  name: 'viewOrder',
  initialState: INITIAL_STATE,
  reducers: {
    orderModalOn: (state, data) => {
      state.show = true
      state.data = data.payload
    },
    orderModalOff: (state) => {
        state.show = false
    }
  }
})

export const { orderModalOff, orderModalOn } = viewOrderModal.actions;
export default viewOrderModal.reducer;