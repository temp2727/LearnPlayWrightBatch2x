// Create a small readiness gate for students before they move to the next practice step.

//     Rules:
// - Return READY only when all three flags are true.
// - Return BLOCKED otherwise.
// - Do not coerce strings like "true"; use boolean values.

// Starter code:

// Starter Code
// js
// function checkJsBasicsReadinessGate(hasSetup, hasPractice, hasNotes) {
//     // write your code here
// }

// Examples
// Input
// checkJsBasicsReadinessGate(true, true, true)
// Output
// "READY"
// Explanation:All flags true is ready
// Input
// checkJsBasicsReadinessGate(true, false, true)
// Output
// "BLOCKED"
// Explanation:Missing practice is blocked
// Visible Test Cases
// Case 1
// Input: checkJsBasicsReadinessGate(true, true, true)

// Expected: "READY"

// Case 2
// Input: checkJsBasicsReadinessGate(true, false, true)

// Expected: "BLOCKED"

// Case 3
// Input: checkJsBasicsReadinessGate("true", true, true)

// Expected: "BLOCKED"

// Interview Hints
// Use strict boolean checks.
// A readiness gate is just a clean compound condition.

function checkJsBasicsReadinessGate(hasSetup, hasPractice, hasNotes) {
    if (hasSetup === true && hasPractice === true && hasNotes === true) {
        return "READY";
    }
    return "BLOCKED";
}

//console.log(checkJsBasicsReadinessGate(true, true, true));
//console.log(checkJsBasicsReadinessGate(true, false, true));
//console.log(checkJsBasicsReadinessGate("true", true, true));   