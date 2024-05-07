import {IPostModel} from "../../models/IPostModel";
import axios, {AxiosResponse} from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'content-type': 'application/json'}
});
const getAllPostsOfSingleUser = async (id: number): Promise<IPostModel[]> => {
   try {
       const response = await axiosInstance.get(`/posts/user/${id}`);
       return response.data
   } catch (error){
       console.error('Error', error);
       return [];
   }
};

export {
    getAllPostsOfSingleUser
}