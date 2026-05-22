let rajkumar_age = 18;
let rj_will_go_to_goa = rajkumar_age > 18 ? "RJ will go to GOA" : "No Goa"
console.log(rj_will_go_to_goa);

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "✅ PASS" : "❌ FAIL";
console.log(testResult);  // ✅ PASS

let environment = "staging";
let baseURL = environment === "prod" ? "https://api.example.com" : "https://staging-api.example.com"
console.log(baseURL);

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("launching browser in", browserMode, "mode");

let responseTime = 850;
let sla = 1000;
let slaStatus = responseTime <= sla ? "Within SLA " : " SLA Breached ";
console.log(`Response: ${responseTime}ms - ${slaStatus}`);

//  Nested Ternary
// Multiple Condition
let age = 26;
let is_pramod_goa = age > 26 ? "Yes, he will go" : "else he will not go";
console.log(is_pramod_goa);

let age_pramod = 45;
let is_pramod_d = age_pramod > 18 ? (age_pramod > 26 ? "Drink" : "No Drink") : "NO GOA";
console.log(is_pramod_d);

///-------------

let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}: ${category}`);


// ---- 


let temp = 35;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log("7. Temperature:", temp, "| Feel:", feel);


let c = 10;
let d = 15;
let maxNumber = c > d ? c : d;
console.log(maxNumber);

let x = 20;
let y = 15;
let z = 18;
let maxValue = x > y ? (x > z ? x : z) : (y > z ? y : z);
console.log(maxValue);

let a = 5;
console.log(a++ + ++a - --a + a-- + ++a); //18  (5 + 7 - 6 + 6 + 6)
console.log(a);//6
