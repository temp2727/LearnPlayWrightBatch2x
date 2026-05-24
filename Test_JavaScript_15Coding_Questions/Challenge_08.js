// Merge default and override configuration values for a test helper.

//     Rules:
//     - Override values must win.
// - If retries is missing from both objects, default it to 0.
//     - Do not mutate the input objects.

// Starter code:

// Starter Code
// js
// function mergeJsBasicsConfig(defaultConfig, overrideConfig) {
//     // write your code here
// }

// Input
// mergeJsBasicsConfig({ "retries": 1, "env": "dev" }, { "retries": 3 })
// Output
// { "retries": 3, "env": "dev" }
// Explanation:Override retries wins

// Input
// mergeJsBasicsConfig({ "env": "qa" }, { "timeout": 5000 })
// Output
// { "env": "qa", "timeout": 5000, "retries": 0 }
// Explanation:Adds missing retries default


// Visible Test Cases
// Case 1
// Input: mergeJsBasicsConfig({ "retries": 1, "env": "dev" }, { "retries": 3 })

// Expected: { "retries": 3, "env": "dev" }

// Case 2
// Input: mergeJsBasicsConfig({ "env": "qa" }, { "timeout": 5000 })

// Expected: { "env": "qa", "timeout": 5000, "retries": 0 }

// Case 3
// Input: mergeJsBasicsConfig({ "env": "dev", "retries": 2 }, { "env": "stage" })

// Expected: { "env": "stage", "retries": 2 }

// Interview Hints
// Use object spread.
// Think about immutability in automation config helpers.

function mergeJsBasicsConfig(defaultConfig, overrideConfig) {
    const merged = { ...defaultConfig, ...overrideConfig };
    if (!("retries" in merged)) {
        merged.retries = 0;
    }
    return merged;
}

//console.log(JSON.stringify(mergeJsBasicsConfig({ retries: 1, env: "dev" }, { retries: 3 })));


//console.log(JSON.stringify(mergeJsBasicsConfig({ env: "qa" }, { timeout: 5000 })));


//console.log(JSON.stringify(mergeJsBasicsConfig({ env: "dev", retries: 2 }, { env: "stage" })));
