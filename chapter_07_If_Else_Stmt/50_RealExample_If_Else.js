// app.vwo.com -> viewer, editor or admin -> 
let isLoggedIn = true;
let userRole = "editor";

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("admin can do all things");
    } else if (userRole === "editor") {
        console.log("Welcome Editor -- Edit access granted.");
    } else if (userRole === "viewer") {
        console.log("Welcome Viewer -- Read Only access.");
    } else {
        console.log("No Idea, you many be a guest");
    }

} else {
    console.log("You are not logged in");
}