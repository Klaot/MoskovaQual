import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userForm: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserForm: (state, action) => {
            state.userForm = !state.userForm
        }
    }
})

export const { setUserForm } = userSlice.actions;
export default userSlice.reducer;