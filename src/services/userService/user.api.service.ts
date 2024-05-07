import IUserModel from "../../models/IUserModel";
import axios, {AxiosResponse} from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'content-type': 'application/json'}
});
const getAllUsers = (): Promise<AxiosResponse<IUserModel[]>> => {
    return axiosInstance.get('/users');
}

export {
    getAllUsers
}
