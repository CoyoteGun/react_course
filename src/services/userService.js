import {apiService} from "./apiService";
import {urls} from "../configs/urls";

const userService = {
    create:(user)=> apiService.post(urls.users, user)
}

export {
    userService
}