"use strict";
//31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
let usernames = ["Junaid", "Nabeel", "Shahrukh", "Sharjeel"];
if (usernames.length === 0) {
    console.log("we need to find some users!");
}
else {
    for (let i = 0; i <= usernames.length; i++) {
        // for (let username of usernames) {
        console.log(usernames);
    }
}
usernames.splice(0, usernames.length);
