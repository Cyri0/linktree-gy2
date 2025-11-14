import axios from "axios";
import { baseURL } from "./baseURL";

export async function logMeIn(username: string, password: string){
    try {
        const response = await axios.post(baseURL + "/api/accounts/token/", {username, password})
        console.log(response.data);
        localStorage.setItem("access", response.data.access)
        localStorage.setItem("refresh", response.data.refresh)
    } catch (error) {
        console.log(error);
    }
}