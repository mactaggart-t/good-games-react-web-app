import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000/api';
const api = axios.create({withCredentials: true})

export const login = async (credentials) => {
    const loginAPI = `${API_BASE}/login`
    const response = await api.post(loginAPI, credentials)
    return response.data;
}
export const signup = async (credentials) => {
    const signupAPI = `${API_BASE}/signup`
    const response = await api.post(signupAPI, credentials)
    return response.data;
}
export const profile = async (username) => {
    const profileAPI = `${API_BASE}/profile`
    const response = await api.post(profileAPI, username)
    return response.data;
}
export const logout = async (user) => {
    const logoutAPI = `${API_BASE}/logout`
    const response = await api.post(logoutAPI, user)
    return response.data;
}
export const update = async (user) => {
    const updateAPI = `${API_BASE}/update`
    const response = await api.post(updateAPI, user)
    return response.data
}