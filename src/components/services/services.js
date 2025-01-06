import axiosApiCall from "../../utlis/APICalls";
import { getAPIResponse } from "../../utlis/APIResponses";

export const getCategoriesByUserId = async (userId) => {
    return await axiosApiCall.get(`/v1/GetCategoriesbyUserId/userId=${userId}`)
        .then(res => {
            return getAPIResponse(res);
        }).catch(error => {
            return getAPIResponse(error);
        });
}