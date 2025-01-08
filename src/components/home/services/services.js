import axiosApiCall from "../../../utlis/APICalls";
import { getAPIResponse } from "../../../utlis/APIResponses";


export const createCategory = async (body) => {
    return await axiosApiCall.post(`/v1/CreateCategory`, body)
        .then(res => {
            return getAPIResponse(res);
        }).catch(error => {
            return getAPIResponse(error);
        });
}