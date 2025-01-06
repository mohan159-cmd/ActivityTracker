import axios from "axios";
import { globalVariables } from "../globalVariables";

const axiosApiCall = axios.create({
    baseURL: globalVariables.apiUri,
});

export default axiosApiCall;