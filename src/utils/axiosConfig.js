import axios from "axios";

import {baseURL} from "../api/endpoints";

export const axiosConfig = axios.create({baseURL})