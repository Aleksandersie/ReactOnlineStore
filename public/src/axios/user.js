import {axiosHost,axiosAuthHost} from "./axios";
import jwtDecode from 'jwt-decode'

export async function registration (email,password){
    const {data} = await axiosHost.post('api/user/registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('token',data.token)
    return jwtDecode(data.token)
}

export async function login (email,password){
    const {data}= await axiosHost.post('api/user/login', {email,password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export async function authCheck(){
    const {data}  = await axiosAuthHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}