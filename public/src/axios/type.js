import { axiosHost, axiosAuthHost } from "./axios"

export async function getTypes() {
   const { data } = await axiosHost.get("api/type")
   return data
}

export async function createTypes(type) {
   try {
      const { data } = await axiosAuthHost.post("api/type", type)
      return type
   } catch (e) {
      console.log(e)
   }
}
