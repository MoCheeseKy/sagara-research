import { createSlice } from '@reduxjs/toolkit';
import { Login } from '../../service'

const initialState = {
    user: {},
    loading: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        // login
        builder.addCase(Login.PostLogin.pending, (state) => {
            state.loading = true
        })
        builder.addCase(Login.PostLogin.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload.data
        })
        builder.addCase(Login.PostLogin.rejected, (state) => {
            state.loading = false
        })
    }
})

export default userSlice.reducer