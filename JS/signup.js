// SignUp JavaScript File

// importing navbar footer and signup page
import { createaccount } from "../Components/createaccount.js";
import { navbar } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";

// appending the innerHTML of navbar
let navdiv = document.getElementById("navbar");
navdiv.innerHTML = navbar();

// appending the innerHTML of footer
let footdiv = document.getElementById("footer");
footdiv.innerHTML = footer();

// appending the innerHTML of signup form
let chamber = document.getElementById("loginchamber");
chamber.innerHTML = createaccount();

// getting the localStorage values
let ssenseuser = JSON.parse(localStorage.getItem("ssenseUser"));
let thisuser = JSON.parse(localStorage.getItem("thisUser"));

// appending the email entered on the loginpage
if (thisuser.UserName) {
    document.getElementById("email").value = thisuser.UserName;
}

// defining the goToLogin function
let goToLogin = () => {
    event.preventDefault();

    // redirection to the Login page
    window.location = "../HTML/login.html";
}

// defining the newSsenseUser function
let newSsenseUser = () => {
    event.preventDefault();

    // getting the entered values of password and gender
    let pass = document.getElementById("password").value;
    let gender = document.querySelector('input[name="gen"]:checked').value;

    // adding them into the object of user
    ssenseuser.password = pass;
    ssenseuser.gender = gender;
    thisuser.password = pass;
    thisuser.gender = gender;

    // storing objects into the localstorage
    localStorage.setItem("thisUser", JSON.stringify(thisuser));
    localStorage.setItem("ssenseUser", JSON.stringify(ssenseuser));

    // after entering all the details redirecting to the Password login page
    window.location = "../HTML/passlogin.html";
}

// on submitting the form calling the newSsenseUser function
document.getElementById("newform").addEventListener("submit", newSsenseUser);

// on clicking the back button calling the goToLogin function
document.getElementById("back").addEventListener("click", goToLogin);