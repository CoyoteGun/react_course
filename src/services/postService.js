import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

export const postService ={
    getAll:() => axiosService.get(urls.posts),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`)
}