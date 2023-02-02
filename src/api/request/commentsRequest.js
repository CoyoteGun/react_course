import {axiosRequest} from "../../utils/axiosConfig";
import {requestsLinks} from "../endpoints";

export const commentsRequest = {
    getAll: () => axiosRequest.get(requestsLinks.comments),
    getCommentById: (id) => axiosRequest.get(requestsLinks.commentById(id))
}