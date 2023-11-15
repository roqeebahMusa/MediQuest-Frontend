import ShowToast from "../component/common/ShowToast";
import Instance from "./AxiosConfig";

interface IUser {
	fullName?: string;
	email: string;
	password?: string;
}
interface ILoginUser {
	email: string;
	password: string;
}
export const RegisterMediUser = async(data:IUser) =>{
    try{
        const response = await Instance.post("/register-user", data)
        console.log("response", response);
         
    }catch(error:any)
    {
        return error
    }
}

export const LoginMediUser = async(data: ILoginUser)=>{
    try{
        const response = await Instance.post("/login-user", data)
        if(response.status === 201){
            ShowToast(true, `${response.data.message}`)
        }
    }catch(error:any)
    {
        ShowToast(false, `${error.response.data.message}`);
    }
}

export const SingleMediUser = async(Id: string)=>{
    try{
        const response = await Instance.post(`/SingleMedi-user/${Id}`)
        return response
    }catch(error:any)
    {
        return error
    }
}