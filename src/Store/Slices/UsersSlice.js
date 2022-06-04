import { createSlice } from '@reduxjs/toolkit'

export const UsersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        setUsers: (state, action) => {

        }
    }
})

// Action creators are generated for each case reducer function

export const { setUsers } = UsersSlice.actions

export default UsersSlice.reducer