// SignUp JavaScript File

import { createaccount } from "../components/createaccount.js";
let ssenseuser = JSON.parse(localStorage.getItem("ssenseUser"));
let thisuser = JSON.parse(localStorage.getItem("thisUser"));

let chamber = document.getElementById("loginchamber");

chamber.innerHTML = createaccount();

if(thisuser.UserName){
    document.getElementById("email").value = thisuser.UserName;
}
let goToLogin = () => {
    event.preventDefault();
    console.log("I am going Back");
    window.location = "../pages/login.html";
}
let newSsenseUser = () => {
    event.preventDefault();
    let pass = document.getElementById("password").value;
    let gender = document.querySelector('input[name="gen"]:checked').value;
    ssenseuser.password = pass;
    ssenseuser.gender = gender;
    thisuser.password = pass;
    thisuser.gender = gender;
    localStorage.setItem("thisUser", JSON.stringify(thisuser));
    localStorage.setItem("ssenseUser", JSON.stringify(ssenseuser));
    console.log("Hey I am new User");
    window.location = "../pages/landingpage.html";
}
document.getElementById("newform").addEventListener("submit", newSsenseUser);
document.getElementById("back").addEventListener("click", goToLogin);