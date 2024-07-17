import axios from "~/plugins/axios";

const $axios = axios().provide.axios;

export const useUser = ()=> {
    const login = async(email,password)=> {
        const res = await $axios.post(`login`,{
            email: email,
            password: password
        })
        return res
    }
}
