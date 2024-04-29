const apiResponseModel = {
    data : null,
    message : null,
    status : null
}

function apiResponse(data, message, status){
    apiResponseModel.data = data
    apiResponseModel.message = message
    apiResponseModel.status = status
    return apiResponseModel
}

module.exports = apiResponse
