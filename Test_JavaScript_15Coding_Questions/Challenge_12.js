// Normalize and deduplicate tags used for organizing tests.

//     Rules:
//     - Trim each tag.
// - Lowercase each tag.
// - Remove blank values.
// - Keep first - seen order.

// Starter code:

// Starter Code
// js
// function createUniqueJsBasicsTags(tags) {
//     // write your code here

//     Examples
//     Input
//     createUniqueJsBasicsTags([" Smoke ", "smoke", "Regression"])
//     Output
//     ["smoke", "regression"]
//     Explanation:Normalizes and dedupes tags
//     Input
//     createUniqueJsBasicsTags(["", " API ", " ", "api"])
//     Output
//     ["api"]
//     Explanation:Removes blank values
// Visible Test Cases
// Case 1
//     Input: createUniqueJsBasicsTags([" Smoke ", "smoke", "Regression"])

//     Expected: ["smoke", "regression"]

// Case 2
//     Input: createUniqueJsBasicsTags(["", " API ", " ", "api"])

//     Expected: ["api"]

// Interview Hints
// Do not use Set before normalization.
// Preserve first - seen order.

function createUniqueJsBasicsTags(tags) {
    const result = [];
    for (const tag of tags) {
        const normalized = String(tag).trim().toLowerCase();
        if (normalized && !result.includes(normalized)) {
            result.push(normalized);
        }
    }
    return result;
}

//console.log(JSON.stringify(createUniqueJsBasicsTags([" Smoke ", "smoke", "Regression"])));
//console.log(JSON.stringify(createUniqueJsBasicsTags(["", " API ", " ", "api"])));
