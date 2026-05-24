// Summarize a two - dimensional matrix of suite results.

//     Rules:
// - The input is an array of arrays.
// - Each cell is a result string.
// - Count total, passed, failed, and collect failedCases.

// Starter code:

// Starter Code
// js
// function summarizeJsBasicsMatrix(matrix) {
//     // write your code here
// }

// Input
// summarizeJsBasicsMatrix([["login-pass"], ["checkout-fail"]])
// Output
// { "total": 2, "passed": 1, "failed": 1, "failedCases": ["checkout-fail"] }
// Explanation:Summarizes mixed matrix
// Input
// summarizeJsBasicsMatrix([["a-pass", "b-pass"], ["c-pass"]])
// Output
// { "total": 3, "passed": 3, "failed": 0, "failedCases": [] }
// Explanation:Summarizes all pass matrix

// Visible Test Cases
// Case 1
// Input: summarizeJsBasicsMatrix([["login-pass"], ["checkout-fail"]])

// Expected: { "total": 2, "passed": 1, "failed": 1, "failedCases": ["checkout-fail"] }

// Case 2
// Input: summarizeJsBasicsMatrix([["a-pass", "b-pass"], ["c-pass"]])

// Expected: { "total": 3, "passed": 3, "failed": 0, "failedCases": [] }

// Interview Hints
// Flatten first, then count.
// This mirrors multi - browser or multi - role test matrices.

function summarizeJsBasicsMatrix(matrix) {
    const flat = matrix.flat();
    const failedCases = flat.filter(r => String(r).toLowerCase().includes("fail"));
    return {
        total: flat.length,
        passed: flat.filter(r => String(r).toLowerCase().includes("pass")).length,
        failed: failedCases.length,
        failedCases,
    };
}

//console.log(JSON.stringify(summarizeJsBasicsMatrix([["login-pass"], ["checkout-fail"]])));
//console.log(JSON.stringify(summarizeJsBasicsMatrix([["a-pass", "b-pass"], ["c-pass"]])));


