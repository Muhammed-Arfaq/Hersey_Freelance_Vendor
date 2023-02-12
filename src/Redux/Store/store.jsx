import { configureStore } from '@reduxjs/toolkit'
import gigReducer from '../Reducer/gigModal'

export const store = configureStore({
    reducer: {
        showGigDetails: gigReducer
    },
})