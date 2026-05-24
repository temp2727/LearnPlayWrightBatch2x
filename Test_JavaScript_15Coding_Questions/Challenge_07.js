// Build a compact summary object from test result labels.

//     Rules:
// - Count total items.
// - Count items containing pass, fail, and skip.
// - Return an object with total, passed, failed, skipped.

// Starter code:

// Starter Code
// js
// function summarizeJsBasicsResults(results) {
//     // write your code here
// }

// Input
// summarizeJsBasicsResults(["login-pass", "api-fail", "profile-skip"])
// Output
// { "total": 3, "passed": 1, "failed": 1, "skipped": 1 }
// Explanation:Summarizes mixed results

// Input
// summarizeJsBasicsResults([])
// Output
// { "total": 0, "passed": 0, "failed": 0, "skipped": 0 }
// Explanation:Summarizes empty list

// Case 1
// Input: summarizeJsBasicsResults(["login-pass", "api-fail", "profile-skip"])

// Expected: { "total": 3, "passed": 1, "failed": 1, "skipped": 1 }

// Case 2
// Input: summarizeJsBasicsResults([])

// Expected: { "total": 0, "passed": 0, "failed": 0, "skipped": 0 }
// Case 3
// Input: summarizeJsBasicsResults(["a-pass", "b-pass"])

// Expected: { "total": 2, "passed": 2, "failed": 0, "skipped": 0 }

// Interview Hints
// Make one normalized array first.
// Return data, not console output.

//console.log(JSON.stringify(summarizeJsBasicsResults(["login-pass", "api-fail", "profile-skip"])));
//console.log(JSON.stringify(summarizeJsBasicsResults([])));
//console.log(JSON.stringify(summarizeJsBasicsResults(["a-pass", "b-pass"])));


function summarizeJsBasicsResults(results) {
    const normalized = results.map(r => String(r).toLowerCase());
    return {
        total: results.length,
        passed: normalized.filter(r => r.includes("pass")).length,
        failed: normalized.filter(r => r.includes("fail")).length,
        skipped: normalized.filter(r => r.includes("skip")).length,
    };
}


