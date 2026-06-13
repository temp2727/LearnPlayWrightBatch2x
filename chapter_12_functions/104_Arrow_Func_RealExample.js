////This is a perfectly normal function.
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine");
    }
}

//Function expression
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine");
    }
}

//Arrow function
const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine");
    }
}

validateStatusCode_Arrow();