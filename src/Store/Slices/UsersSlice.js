import { createSlice } from '@reduxjs/toolkit'

export const UsersSlice = createSlice({
    name: 'users',
    initialState: {
        list: []
    },
    reducers: {
        setUsers: (state, { payload }) => {
            state.list = payload
        }
    }
})

// Action creators are generated for each case reducer function

export const { setUsers } = UsersSlice.actions

export default UsersSlice.reducer