// Count how many check result strings represent a pass.

//     Rules:
// - Treat matching as case - insensitive.
// - A passing item contains the word "pass".
// - Return only the count.


// function countPassingJsBasicsChecks(results) {
//     // write your code here
// }

// countPassingJsBasicsChecks(["login-pass", "api-fail", "logout-pass"])
// Output
// 2
// Explanation:Counts mixed pass / fail data

// Case 2
// Input: countPassingJsBasicsChecks(["SETUP PASS", "CONFIG PASS"])

// Expected: 2

// Case 3
// Input: countPassingJsBasicsChecks(["one-fail", "two-skip"])

// Expected: 0

// Interview Hints
// Normalize each result before checking.
//     filter().length is concise here.

console.log(countPassingJsBasicsChecks(["login-pass", "api-fail", "logout-pass"]));
console.log(countPassingJsBasicsChecks(["SETUP PASS", "CONFIG PASS"]));
console.log(countPassingJsBasicsChecks(["one-fail", "two-skip"]));

function countPassingJsBasicsChecks(results) {
    return results.filter(r => String(r).toLowerCase().includes("pass")).length;
}

