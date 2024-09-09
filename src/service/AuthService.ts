import {AxiosInstance} from "axios";
import { baseInstance} from "./Api";

type LoginParams = {
    name : string
    password : string
}

const AuthService = (api : AxiosInstance = baseInstance) => ({
    login : async (params : LoginParams) => {
        const encodedData = window.btoa(params.name + ":" + params.password);
        const response = await api.get("/login", {
            headers: {
                Authorization: `Basic ${encodedData}`
            }
        })
        if(response && response.status == 200){
            console.log("success")
            console.log(response)

            localStorage.setItem("accessToken", encodedData)

        }
    }
})

export default AuthService
