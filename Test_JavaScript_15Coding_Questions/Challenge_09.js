// Create a standard label for a test run dashboard.

//     Rules:
// - Trim the suite name.
// - Lowercase the environment.
// - Append build number as build - N.
// - Join the three parts with " | ".

// Starter code:

// Starter Code
// js
// function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
//     // write your code here
// }

// Input
// buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42)
// Output
// "Smoke Suite | staging | build-42"
// Explanation:Builds staging smoke label
// Input
// buildJsBasicsRunLabel("Regression", "PROD", 7)
// Output
// "Regression | prod | build-7"
// Explanation:Builds prod regression label

// Visible Test Cases
// Case 1
// Input: buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42)

// Expected: "Smoke Suite | staging | build-42"

// Case 2
// Input: buildJsBasicsRunLabel("Regression", "PROD", 7)

// Expected: "Regression | prod | build-7"

// Interview Hints
// Use string trim and lowercase.
// Keep formatting deterministic.

function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
    const suite = String(suiteName).trim();
    const env = String(environment).trim().toLowerCase();
    const build = `build-${buildNumber}`;
    return [suite, env, build].join(" | ");
}

//console.log(buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42));
//console.log(buildJsBasicsRunLabel("Regression", "PROD", 7));