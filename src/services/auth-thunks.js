import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./auth-service"

export const loginThunk = createAsyncThunk(
    'login', async (credentials) =>
        await service.login(credentials)
)
export const signupThunk = createAsyncThunk(
    'signup', async (credentials) =>
        await service.signup(credentials)
)
export const logoutThunk = createAsyncThunk(
    'logout', async (user) =>
        await service.logout(user)
)
export const profileThunk = createAsyncThunk(
    'profile', async (userID) =>
        await service.profile(userID)
)