// Convert a list of tasks into a numbered checklist.

//     Rules:
// - Keep the original task text after trimming.
// - Number items from 1.
//     - Append " - TODO" to each item.
// - Skip blank values.

// Starter code:

// Starter Code
// js
// function buildJsBasicsChecklist(items) {
//     // write your code here
// }

// Examples
// Input
// buildJsBasicsChecklist(["Install Node", "Create GitHub repo"])
// Output
// ["1. Install Node - TODO", "2. Create GitHub repo - TODO"]
// Explanation:Builds numbered checklist
// Input
// buildJsBasicsChecklist(["Practice switch", " ", "Push code"])
// Output
// ["1. Practice switch - TODO", "2. Push code - TODO"]
// Explanation:Skips blank checklist items
// Visible Test Cases
// Case 1
// Input: buildJsBasicsChecklist(["Install Node", "Create GitHub repo"])

// Expected: ["1. Install Node - TODO", "2. Create GitHub repo - TODO"]

// Case 2
// Input: buildJsBasicsChecklist(["Practice switch", " ", "Push code"])

// Expected: ["1. Practice switch - TODO", "2. Push code - TODO"]

// Interview Hints
// Filter blanks before numbering.
// Numbering after filtering avoids gaps.

function buildJsBasicsChecklist(items) {
    const validItems = items.filter(item => String(item).trim().length > 0);
    return validItems.map((item, index) => {
        return `${index + 1}. ${String(item).trim()} - TODO`;
    });
}

//console.log(JSON.stringify(buildJsBasicsChecklist(["Install Node", "Create GitHub repo"])));
//console.log(JSON.stringify(buildJsBasicsChecklist(["Practice switch", " ", "Push code"])));


