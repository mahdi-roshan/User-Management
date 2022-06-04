import { createSlice } from '@reduxjs/toolkit'

export const UsersSlice = createSlice({
    name: 'users',
    initialState: {
        list: []
    },
    reducers: {
        setUsers: (state, { payload }) => {
            state.list = payload
        },
        addUser: (state, { payload }) => {
            state.list = state.list.push(payload)
        },
        deleteUser: (state, {payload}) => {
            state.list = state.list.filter(user => user.id !== payload);
        }
    }
})

// Action creators are generated for each case reducer function

export const { setUsers, addUser, deleteUser } = UsersSlice.actions

export default UsersSlice.reducer