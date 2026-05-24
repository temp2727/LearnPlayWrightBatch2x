// Find the first critical bug title from a bug list.

//     Rules:
// - Each bug has title and severity.
// - Return the title of the first bug with severity "critical".
// - Return "No critical bug" when none exists.

// Starter code:

// Starter Code
// js
// function findFirstCriticalJsBasicsBug(bugs) {
//     // write your code here
// }

// Input
// findFirstCriticalJsBasicsBug([{ "title": "Typo", "severity": "low" }, { "title": "Login crash", "severity": "critical" }])
// Output
// "Login crash"
// Explanation:Finds first critical item
// Input
// findFirstCriticalJsBasicsBug([{ "title": "Spacing issue", "severity": "low" }])
// Output
// "No critical bug"
// Explanation:Returns fallback when no critical bug exists

// Visible Test Cases
// Case 1
// Input: findFirstCriticalJsBasicsBug([{ "title": "Typo", "severity": "low" }, { "title": "Login crash", "severity": "critical" }])

// Expected: "Login crash"

// Case 2
// Input: findFirstCriticalJsBasicsBug([{ "title": "Spacing issue", "severity": "low" }])

// Expected: "No critical bug"

// Interview Hints
// Array.find returns the first matching item.
// Always handle the not - found branch.

function findFirstCriticalJsBasicsBug(bugs) {
    const critical = bugs.find(b => b.severity === "critical");
    return critical ? critical.title : "No critical bug";
}

// console.log(findFirstCriticalJsBasicsBug([
//     { title: "Typo", severity: "low" },
//     { title: "Login crash", severity: "critical" }
// ]));


// //console.log(findFirstCriticalJsBasicsBug([
//     { title: "Spacing issue", severity: "low" }
// ]));

