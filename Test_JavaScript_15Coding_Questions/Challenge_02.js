// Case 1
// Input: isValidJsBasicsIdentifier("loginButton")

// Expected: true

// Case 2
// Input: isValidJsBasicsIdentifier("$submit")

// Expected: true

// Case 3
// Input: isValidJsBasicsIdentifier("1login")

// Expected: false

// Case 4
// Input: isValidJsBasicsIdentifier("let")

// Expected: false

// Validate Js Basics Identifier
// Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

// Write a validator for names used in helper functions, variables, or test data keys.

//     Rules:
// - Value must be a non - empty string after trimming.
// - It must start with a letter, underscore, or dollar sign.
// - Remaining characters may include letters, digits, underscore, or dollar sign.
// - Reject reserved words used in this chapter: let, const, var, class, function, return.

//console.log(validateName("1login"));

function validateName(name) {

    const reservedWords = ["let", "const", "var", "class", "function", "return"];

    if (typeof name !== "string") {
        return false;
    }

    const trimmed = name.trim();

    if (trimmed.length === 0) {
        return false;
    }

    const validPattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    if (!validPattern.test(trimmed)) {
        return false;
    }

    if (reservedWords.includes(trimmed)) {
        return false;
    }

    return true;
};
