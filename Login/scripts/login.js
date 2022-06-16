// Login JavaScript File

import { login } from "../components/logedin.js";

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
    if(ssenseuser1 == null)
    {            
        localStorage.setItem("thisUser", JSON.stringify(newuser));
        localStorage.setItem("ssenseUser", JSON.stringify(newuser1));
        window.location = "../pages/signup.html";
    }
    else if(newuser1.UserName != ssenseuser1.UserName)
    {
        localStorage.setItem("thisUser", JSON.stringify(newuser));
        localStorage.setItem("ssenseUser", JSON.stringify(newuser1));
        window.location = "../pages/signup.html";
    }
    else if(newuser1.UserName == ssenseuser1.UserName)
    {
        localStorage.setItem("thisUser", JSON.stringify(newuser));
        window.location = "../pages/passlogin.html";
    }
}
document.getElementById("loginform").addEventListener("submit", getUser);