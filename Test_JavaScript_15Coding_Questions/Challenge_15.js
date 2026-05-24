// Calculate a simple weighted practice score.

//     Rules:
// - Each passed item gives 2 points.
// - Each failed item subtracts 1 point.
// - Skipped items are 0 points.
// - Return the final number.

// Starter code:

// Starter Code
// js
// function calculateJsBasicsWeightedScore(passed, failed, skipped) {
//     // write your code here
// }

// Examples
// Input
// calculateJsBasicsWeightedScore(5, 2, 1)
// Output
// 8
// Explanation:Calculates mixed score
// Input
// calculateJsBasicsWeightedScore(3, 0, 0)
// Output
// 6
// Explanation:All pass gives double points
// Visible Test Cases
// Case 1
// Input: calculateJsBasicsWeightedScore(5, 2, 1)

// Expected: 8

// Case 2
// Input: calculateJsBasicsWeightedScore(3, 0, 0)

// Expected: 6

// Case 3
// Input: calculateJsBasicsWeightedScore(1, 4, 3)

// Expected: -2

// Interview Hints
// Translate the rule directly into arithmetic.
// Skipped count is included for readability even though it adds zero.

function calculateJsBasicsWeightedScore(passed, failed, skipped) {
    return passed * 2 - failed * 1 + skipped * 0;
}

//console.log(calculateJsBasicsWeightedScore(5, 2, 1));
//console.log(calculateJsBasicsWeightedScore(3, 0, 0));
//console.log(calculateJsBasicsWeightedScore(1, 4, 3)); 