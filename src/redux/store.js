import {configureStore} from '@reduxjs/toolkit'
import { authReducer } from './slices/auth.js'
import { ordersReducer } from './slices/order.js'

const store = configureStore({
    reducer: {
        auth: authReducer,
        orders: ordersReducer
    }
})

export default store