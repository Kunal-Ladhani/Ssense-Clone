import { password } from "../Components/password.js";
import { navbar } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";

let navdiv = document.getElementById("navbar");
navdiv.innerHTML = navbar();

let footdiv = document.getElementById("footer");
footdiv.innerHTML = footer();

let ssenseuser = JSON.parse(localStorage.getItem("ssenseUser"));
let thisuser = JSON.parse(localStorage.getItem("thisUser"));

let chamber = document.getElementById("loginchamber");
chamber.innerHTML = password();

document.getElementById("email").value = thisuser.UserName;
let goToHome = () => {
    event.preventDefault();
    let pass = document.getElementById("password").value;
    if (pass != ssenseuser.password) {
        alert("Sorry! Wrong Password!");
    }
    else {
        window.location = "../index.html";
    }
}
document.getElementById("passform").addEventListener("submit", goToHome)