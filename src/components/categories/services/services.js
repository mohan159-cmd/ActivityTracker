import axiosApiCall from "../../../utlis/APICalls";
import { getAPIResponse } from "../../../utlis/APIResponses";

export const getCatlogsbyCatgeoryId = async (categoryId) => {
    return await axiosApiCall.get(`/v1/GetCatlogsbyCatgeoryId/categoryId=${categoryId}`)
        .then(res => {
            return getAPIResponse(res);
        }).catch(error => {
            return getAPIResponse(error);
        });
}

export const createCatlog = async (body) => {
    return await axiosApiCall.post(`/v1/CreateCatlog`, body)
        .then(res => {
            return getAPIResponse(res);
        }).catch(error => {
            return getAPIResponse(error);
        });
}