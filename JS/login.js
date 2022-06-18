// Login JavaScript File
import { navbar } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";
import { login } from "../Components/logedin.js";

let navdiv = document.getElementById("navbar");
navdiv.innerHTML = navbar();

let footdiv = document.getElementById("footer");
footdiv.innerHTML = footer();

let chamber = document.getElementById("loginchamber");
chamber.innerHTML = login();

let ssenseuser1 = JSON.parse(localStorage.getItem("ssenseUser"));
let thisuser = JSON.parse(localStorage.getItem("thisUser"));

let getUser = () => {
    event.preventDefault();
    let username = loginform.email.value;
    class User {
        constructor(uname) {
            this.UserName = uname;
        }
    }
    let newuser1 = new User(username);
    let newuser = newuser1;
    if (ssenseuser1 == null) {
        localStorage.setItem("thisUser", JSON.stringify(newuser));
        localStorage.setItem("ssenseUser", JSON.stringify(newuser1));
        window.location = "../HTML/signup.html";
    }
    else if (newuser1.UserName != ssenseuser1.UserName) {
        localStorage.setItem("thisUser", JSON.stringify(newuser));
        localStorage.setItem("ssenseUser", JSON.stringify(newuser1));
        window.location = "../HTML/signup.html";
    }
    else if (newuser1.UserName == ssenseuser1.UserName) {
        localStorage.setItem("thisUser", JSON.stringify(newuser));
        window.location = "../HTML/passlogin.html";
    }
}
document.getElementById("loginform").addEventListener("submit", getUser);