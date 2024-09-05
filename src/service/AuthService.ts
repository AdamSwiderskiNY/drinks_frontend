import { AxiosInstance } from "axios";
import { baseInstance } from "./Api";

type LoginParams = {
    name : string
    password : string
}

const AuthService = (api : AxiosInstance = baseInstance) => ({
    login : async (params : LoginParams) => {
        const response = await api.post("login", params)
        if(response && response.status == 200){
            console.log("success")
            console.log(response)

            localStorage.setItem("accessToken", response.data.accessToken)

        }
    }
})

export default AuthService
