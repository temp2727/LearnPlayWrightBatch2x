// Given a noisy list of topic labels, keep only supported chapter terms and remove duplicates.

//     Rules:
// - Trim and lowercase each item.
// - Allow known aliases from the chapter group.
// - Return canonical topic keys in first - seen order.
// - Skip unsupported values.

//     Case 1
// Input: filterSupportedJsBasicsTopics(["NODE", " v8 ", "unknown"])

// Expected: ["node", "v8"]
// Case 2
// Input: filterSupportedJsBasicsTopics(["node", "runtime", "node"])

// Expected: ["node"]

// Case 3
// Input: filterSupportedJsBasicsTopics(["npm", "node", "v8"])

// Expected: ["npm", "node", "v8"]

// Interview Hints
// Use an alias map for canonical names.
// Dedup with result.includes for simple arrays.

//console.log(filterSupportedJsBasicsTopics(["NODE", " v8 ", "unknown"]));        // ["node", "v8"]
//console.log(filterSupportedJsBasicsTopics(["node", "runtime", "node"]));         // ["node"]
//console.log(filterSupportedJsBasicsTopics(["npm", "node", "v8"]));

function filterSupportedJsBasicsTopics(topics) {
    const aliasMap = {
        node: "node",
        nodejs: "node",
        "node.js": "node",
        v8: "v8",
        npm: "npm",
    };

    const result = [];
    for (const item of topics) {
        const normalized = String(item).trim().toLowerCase();
        const canonical = aliasMap[normalized];
        if (canonical && !result.includes(canonical)) {
            result.push(canonical);
        }
    }
    return result;
}
