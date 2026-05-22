//Question 1 — HTTP Status Code Categorizer

const prompt = require("prompt-sync")();
let statusCode = Number(prompt("Enter a statusCode: "));

if (statusCode >= 500 && statusCode <= 599) {
    console.log(statusCode + ": Server Error");
} else if (statusCode >= 400 && statusCode <= 499) {
    console.log(statusCode + ": Client Error");
} else if (statusCode >= 300 && statusCode <= 399) {
    console.log(statusCode + ": Redirection Error");
} else if (statusCode >= 200 && statusCode <= 299) {
    console.log(statusCode + ": Success");
} else {
    console.log(statusCode + ": is Invalid");
}

//Question 2 — Test Case Pass/Fail Verdict
//Problem: Compare actual result with expected result and print test verdict.
let expected = "Login Successful";
let actual = "Login Successfull";

if (actual === expected) {
    console.log(" ✅ Test case Passed");
} else {
    console.log("❌ Test case Failed - Expected: " + expected + ", Got: " + actual);
}

//Question 3 — Bug Severity Classifier
//Problem: Given a bug's impact score (1–10), classify the severity.
let bugSeverity = 1;
switch (bugSeverity) {
    case 10:
    case 9:
        console.log("Bug Severity is Critical (block release)");
        break;
    case 8:
    case 7:
        console.log("Bug Severity is High");
        break;
    case 6:
    case 5:
    case 4:
        console.log("Bug Severity is Medium");
        break;
    case 3:
    case 2:
    case 1:
        console.log("Bug Severity is Low");
        break;
    default:
        console.log("Invalid score");
}

//Question 4 — Build Health Reporter
//Problem: Given the percentage of test cases passed in a CI build, report build health.

let testcasePassPercentage = 92;
switch (Math.trunc(testcasePassPercentage / 10)) {
    case 10:
        console.log('Green Build');
        break;
    case 9:
        console.log('🟡 Stable - Investigate Failures');
        break;
    case 8:
    case 7:
        console.log('Unstable Build');
        break;
    default:
        console.log('🔴 Broken Build - Block Deployment');

}

// Question 5 — Login Lockout After Failed Attempts
//Problem: Track failed login attempts. Lock the account after 3 failed attempts.

let failedAttempts = 2;

if (failedAttempts === 2) {
    console.log("1 attempt left before lockout")
}
else if (failedAttempts === 3) {
    console.log("🔒 Account Locked — Contact support")
}
else if (failedAttempts === 0) {
    console.log("Login successful")
}
