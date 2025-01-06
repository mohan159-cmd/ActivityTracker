export const getAPIResponse = (response) => {
    let result = {
      responseCode: 0,
      responseData: "",
      headers: ''
    }
    if (response?.code === "ERR_BAD_REQUEST") {
      result.responseCode = response.response.status;
      result.responseData = response.response.data;
      result.headers = response.response.headers
    }
    else if (response?.code === "ERR_BAD_RESPONSE") {
      result.responseCode = response.response.status;
      result.responseData = response.response.data;
      result.headers = response.response.headers
    }
    else {
      result.responseCode = response.status;
      result.responseData = response.data;
      result.headers = response.headers
    }
    return result;
}

/* export async function getUsers() {
    return await axiosApiCall.get(`/v1/UserRole/GetTenantUserDetails`)
        .then(res => {
            return getAPIResponse(res);
        }).catch(error => {
            return getAPIResponse(error);
        });
} */

/* const getquestionPatternTypeIDs = async () => {
    const data = await getKeyValuePairs("OnboardingQuestionPatterns");
    if (data.responseCode === 200) {
        setquestionPatternTypeIDDetails(data?.responseData)
    }
    else {
        setquestionPatternTypeIDDetails([])
    }
} */