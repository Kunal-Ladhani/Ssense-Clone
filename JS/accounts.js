
// importing account navbar and footer from the components folder
import { account } from "../Components/accounts.js";
import { navbar } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";

// appending navbar
let navdiv = document.getElementById("navbar");
navdiv.innerHTML = navbar();

// appending footer
let footdiv = document.getElementById("footer");
footdiv.innerHTML = footer();

// appending accounts innerHTML
let container = document.getElementById("scontainer");
container.innerHTML = account();

document.querySelector("#logout").addEventListener("click", logoutUser);

function logoutUser(){
    // event.preventDefault();
    // console.log("Hello");
    let thisUser = JSON.parse(localStorage.getItem("thisUser")) || {};
    let ssenseUser = JSON.parse(localStorage.getItem("ssenseUser")) || {};
    thisUser = {};
    ssenseUser = {};
    localStorage.setItem("thisUser", JSON.stringify(thisUser));
    localStorage.setItem("ssenseUser", JSON.stringify(ssenseUser));
}