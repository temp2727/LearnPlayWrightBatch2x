//Immediately Invoked Function Expression (IIFE) //They don't need to be called.
function name1() {
    console.log("Hi")
}
name1();

(function () {
    console.log();
})();

(function () {
    console.log("Staging");
})();

(() => {
    console.log("Staging");
})();