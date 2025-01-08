import axios from "axios";
import { globalVariables } from "../globalVariables";

const axiosApiCall = axios.create({
    baseURL: globalVariables.apiUri,
    /* baseURL: globalVariables.loacalApiUri */
});

export default axiosApiCall;