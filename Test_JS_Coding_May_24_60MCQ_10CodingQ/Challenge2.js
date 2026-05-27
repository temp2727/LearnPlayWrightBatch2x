function questionName(input) {
    let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
    let pass = 0, fail = 0, skip = 0;

    for (let i = 0; i < testResults.length(); i++) {
        if (testResults[i] === "pass") {
            pass++;
        } else if (testResults[i] === "fail") {
            fail++;
        } else {
            skip++;
        }

    }
    console.log(pass);

}
