import { configureStore } from '@reduxjs/toolkit'
import UsersReducer from './Slices/UsersSlice'

export const store = configureStore({
    reducer: {
        users: UsersReducer
    },
})