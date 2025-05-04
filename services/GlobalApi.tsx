import axios from "axios";

export const GlobalApi = axios.create({
  baseURL: "http://192.168.1.107/api",
  headers: {
    'Authorization': `Bearer ${process.env.EXPO_PUBLIC_STRAPI_API_KEY}`
  }
});

const GetUserInfo=(email:string)=> GlobalApi.get(`/api/user-lists?filters[UserEmail][$eq]=${email}`)
const CreateUserInfo=(email:string)=> GlobalApi.post(`/api/user-lists`,{
  data:{
    UserEmail:email
  }
})

export default {
  GetUserInfo,
  CreateUserInfo
}
