import { configureStore } from '@reduxjs/toolkit'
import EditGigReducer from '../Reducer/editGigModal'
import EditProfileReducer from '../Reducer/editProfileModal'
import gigReducer from '../Reducer/gigModal'
import viewGigReducer from '../Reducer/ViewGigModal'
import viewOrderReducer from '../Reducer/viewOrderModal'

export const store = configureStore({
    reducer: {
        showGigDetails: gigReducer,
        editVendorProfile: EditProfileReducer,
        viewGigDetails: viewGigReducer,
        editGigDetails: EditGigReducer,
        viewOrderDetails: viewOrderReducer
    },
})