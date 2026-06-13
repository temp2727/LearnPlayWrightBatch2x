//This is older way of creating objects,we are not using it in Playwright.
const user = {
    firstName: "Pramod",
    lastName: "Dutta",
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}

// Objects - JS {}
// Class and Object is different from Objects.
// this. it means current value in the Object.

console.log(user.fullName);
user.fullName = "Amit Sharma";
console.log(user.fullName);

//The below new format will be used later.
// class User{
//     firstname
//     lastName,
//     fullName(){

//     }
// }