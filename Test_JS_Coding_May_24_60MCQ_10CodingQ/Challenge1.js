// Write your solution here
function questionName(input) {

    let response = "";
    switch (input) {
        case 200:
            response = "Status Code : " + input + " Result : " + "PASS - OK: Request successful";
            break;
        case 201:
            response = "Status Code : " + input + " Result : " + "PASS - Created: Resource created successfully";
            break;
        case 301:
            response = "Status Code : " + input + " Result : " + "WARNING - Moved Permanently: URL has changed";
            break;
        case 400:
            response = "Status Code : " + input + " Result : " + "FAIL - Bad Request: Check request payload";
            break;
        case 401:
            response = "Status Code : " + input + " Result : " + "FAIL - Unauthorized: Check auth token";
            break;
        case 403:
            response = "Status Code : " + input + " Result : " + "FAIL - Forbidden: Insufficient permissions";
            break;
        case 404:
            response = "Status Code : " + input + " Result : " + "FAIL - Not Found: Check endpoint URL";
            break;
        case 500:
            response = "Status Code : " + input + " Result : " + "FAIL - Internal Server Error: Backend issues";
            break;
        default:
            response = "Status Code : " + input + " Result : " + "UNKNOWN - Unhandled status code";
            break;
    }

    return response;
}