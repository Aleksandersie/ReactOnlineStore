import {axiosAuthHost, axiosHost} from "./axios";


export async function getBrand(){
    const {data} = await axiosHost.get('api/brand')
    return data
}

export async function createBrand(brand){
    const {data} = await axiosAuthHost.post('api/brand', brand )
    return data
}