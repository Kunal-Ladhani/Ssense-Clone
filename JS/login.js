// Login JavaScript File

// Importing navbar footer and login page data
import { navbar } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";
import { login } from "../Components/logedin.js";

// appending the innerHTML of navbar
let navdiv = document.getElementById("navbar");
navdiv.innerHTML = navbar();

// appending the innerHTML of footer
let footdiv = document.getElementById("footer");
footdiv.innerHTML = footer();

// appending the innerHTML of Loginpage
let chamber = document.getElementById("loginchamber");
chamber.innerHTML = login();

// getting data stored in localStorage
let ssenseuser1 = JSON.parse(localStorage.getItem("ssenseUser"));
let thisuser = JSON.parse(localStorage.getItem("thisUser"));

// creating getUser function
let getUser = () => {
    event.preventDefault();

    // getting email from the user
    let username = loginform.email.value;

    // added class to create user object
    class User {
        constructor(uname) {
            this.UserName = uname;
        }
    }

    // calling the class to create an object
    let newuser1 = new User(username);
    let newuser = newuser1;

    // if there is no user present in the localstorage then this will redirect to signup page
    if (ssenseuser1 == null) {
        localStorage.setItem("thisUser", JSON.stringify(newuser));
        localStorage.setItem("ssenseUser", JSON.stringify(newuser1));
        window.location = "../HTML/signup.html";
    }

    // if there is user present in the localstorage but the email entered is different then this will redirect to signup page
    else if (newuser1.UserName != ssenseuser1.UserName) {
        localStorage.setItem("thisUser", JSON.stringify(newuser));
        localStorage.setItem("ssenseUser", JSON.stringify(newuser1));
        window.location = "../HTML/signup.html";
    }

    // if there is user present in the localstorage and email entered is same then this will redirect to login with password page
    else if (newuser1.UserName == ssenseuser1.UserName) {
        localStorage.setItem("thisUser", JSON.stringify(newuser));
        window.location = "../HTML/passlogin.html";
    }
}

// on clicking the submit button getUser function will be call which difined above
document.getElementById("loginform").addEventListener("submit", getUser);