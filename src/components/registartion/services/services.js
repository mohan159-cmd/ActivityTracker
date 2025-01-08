import axiosApiCall from "../../../utlis/APICalls";
import { getAPIResponse } from "../../../utlis/APIResponses";


export const createNewUser = async (body) => {
    return await axiosApiCall.post(`/v1/CreateNewUser`, body)
        .then(res => {
            return getAPIResponse(res);
        }).catch(error => {
            return getAPIResponse(error);
        });
}

export const getUserDetailsByEmailId = async (emailId) => {
    return await axiosApiCall.get(`/v1/getUserByEmailId?email=${emailId}`)
        .then(res => {
            return getAPIResponse(res);
        }).catch(error => {
            return getAPIResponse(error);
        });
}