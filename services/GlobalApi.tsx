import axios from "axios";

export const GlobalApi = axios.create({
  baseURL: "http://192.168.1.109:1337",
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

const  GetFeaturedCategoryList=()=> GlobalApi.get(`/api/ai-models?filters[isFeatured][$eq]=true&populate=*`)

const GetAiModelList=(type:string)=> GlobalApi.get(`/api/ai-models?filters[${type}][$eq]=true&populate=*`)

export default {
  GetUserInfo,
  CreateUserInfo,
  GetFeaturedCategoryList,
  GetAiModelList
}
