import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../helper/api'

const PostLogin = createAsyncThunk(
    'post/login',
    async (payload, {rejectWithValue}) => {
        try {
            return API.post({url: '/', payload})
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const Login = {
    PostLogin
}

export default Login
