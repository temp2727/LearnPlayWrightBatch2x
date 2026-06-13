// Scope in Functions
let env = "staging"; //global scope

function setupConfig() {
    let timeOut = 3000; //local scope
    console.log(env); // can access global
    console.log(timeout); //can access local
}

setupConfig();
console.log(env);
console.log(timeout);