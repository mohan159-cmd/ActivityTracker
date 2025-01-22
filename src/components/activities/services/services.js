import axiosApiCall from "../../../utlis/APICalls";
import { getAPIResponse } from "../../../utlis/APIResponses";



export const getActivitiesbyCatlogId = async (catlogId) => {
    return await axiosApiCall.get(`/v1/GetActivitiesbyCatlogId/catlogId=${catlogId}`)
        .then(res => {
            return getAPIResponse(res);
        }).catch(error => {
            return getAPIResponse(error);
        });
}

export const createActivity = async (body) => {
    return await axiosApiCall.post(`/v1/CreateActivity`, body)
        .then(res => {
            return getAPIResponse(res);
        }).catch(error => {
            return getAPIResponse(error);
        });
}