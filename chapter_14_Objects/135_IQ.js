const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const user = { name: "John", age: 30 };

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

//Below way not used practically
// // Object.keys/values/entries
// Object.keys(user).forEach(key => {
//     console.log(key);
// });

//Below way also not used.
// Object.entries(user).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });