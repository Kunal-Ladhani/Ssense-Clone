
// Importing navbar footer and password page data
import { password } from "../Components/password.js";
import { navbar } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";

// appending the innerHTML of navbar
let navdiv = document.getElementById("navbar");
navdiv.innerHTML = navbar();

// appending the innerHTML of footer
let footdiv = document.getElementById("footer");
footdiv.innerHTML = footer();

// appending the innerHTML of Password page
let chamber = document.getElementById("loginchamber");
chamber.innerHTML = password();

// getting data stored in localStorage
let ssenseuser = JSON.parse(localStorage.getItem("ssenseUser"));
let thisuser = JSON.parse(localStorage.getItem("thisUser"));

// appending the email into the email section
document.getElementById("email").value = thisuser.UserName;

// defining goToHome function
let goToHome = () => {
    event.preventDefault();

    // getting the entered password
    let pass = document.getElementById("password").value;

    // if the entered password is wrong showing alert
    if (pass != ssenseuser.password) {
        alert("Sorry! Wrong Password!");
    }

    // if the entered password is correct redirecting to the landing page
    else {
        window.location = "../index.html";
    }
}

// on submitting the form calling the goToHome function
document.getElementById("passform").addEventListener("submit", goToHome)