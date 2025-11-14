import axios from "axios";
import { baseURL } from "./baseURL";

const protectedAPI = axios.create({baseURL: baseURL})

protectedAPI.interceptors.request.use( config => {
    const accessToken = localStorage.getItem("access")

    if(accessToken){
        config.headers["Authorization"] = `Bearer ${accessToken}`
    }
    return config
})

export async function getAuthUserData(){
    try {
        const response = await protectedAPI.get("/api/accounts/me/")
        console.log(response.data);
        return response.data
    } catch (error) {
        console.log(error);
    }
}