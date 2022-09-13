import axios from 'axios'


const axiosHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const axiosAuthHost = axios.create({
    baseURL:process.env.REACT_APP_API_URL
})

function axiosAuthInterceptor(config){
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

axiosAuthHost.interceptors.request.use(axiosAuthInterceptor)

export {
    axiosHost,
    axiosAuthHost
}