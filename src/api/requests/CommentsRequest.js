import {axiosConfig} from "../../utils/axiosConfig";
import {requestLinks} from "../endpoints";

export const commentsRequest = {
    getAll: () => axiosConfig.get(requestLinks.comments)
}