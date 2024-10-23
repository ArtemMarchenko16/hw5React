import axios from "axios";
import {IFormProps} from "../models/IFormProps";
import {IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {}
})

export const apiService = {
    post: {
        savePost:async(dataForm: IFormProps ): Promise<IPost> => {
            const {data} = await axiosInstance.post<IPost>("/posts" , dataForm);
            return data;
        }
    }
}