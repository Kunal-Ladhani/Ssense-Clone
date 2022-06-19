import { account } from "../Components/accounts.js";
import { navbar } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";

let navdiv = document.getElementById("navbar");
navdiv.innerHTML = navbar();

let footdiv = document.getElementById("footer");
footdiv.innerHTML = footer();

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