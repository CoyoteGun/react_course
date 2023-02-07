import {axiosService} from "./axiosService";

import {urls} from "../configs/urls";

export const userService ={
    getAll: () => axiosService.get(urls.users),
    getById:(id) => axiosService.get(`${urls.users}/${id}`)
}