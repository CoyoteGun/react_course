import {axiosConfig} from "../../utils/axiosConfig";
import {requestLinks} from "../endpoints";

export const usersRequest = {
    getAll: () => axiosConfig.get(requestLinks.users)
}