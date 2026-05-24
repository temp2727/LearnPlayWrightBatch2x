// Build a lookup function for important keywords or terms from this chapter group.

//     Rules:
// - Normalize input by trimming and lowercasing.
// - Return the mapped meaning when the term exists.
// - Return "unknown" for unmapped terms.


// function getJsBasicsKeywordMeaning(term) {
//         // write your code here
//     }

// 

// Interview Hints
// Object lookup is cleaner than a long if/else chain for fixed mappings.
// Normalize the input first.

// console.log(getJsBasicsKeywordMeaning("NODE"));
// console.log(getJsBasicsKeywordMeaning(" v8 "));
// console.log(getJsBasicsKeywordMeaning("npm"));
// console.log(getJsBasicsKeywordMeaning("not-a-topic"));


function getJsBasicsKeywordMeaning(term) {
    // write your code here

    const map = {
        node: "runtime",
        v8: "engine",
        npm: "package-manager",
    };
    const normalized = String(term).trim().toLowerCase();
    return map[normalized] || "unknown";
}


