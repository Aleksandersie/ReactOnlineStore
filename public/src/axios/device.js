import { axiosAuthHost, axiosHost } from "./axios"

export async function getDevice(brandId, typeId, limit, page) {
   const { data } = await axiosHost.get("api/device", {
      params: { brandId, typeId, limit, page },
   })
   return data
}

export async function createDevice(device) {
   const { data } = await axiosAuthHost.post("api/device", device)
   return data
}

export async function getOneDevice(id) {
   const { data } = await axiosHost.get("api/device/" + id)
   return data
}
