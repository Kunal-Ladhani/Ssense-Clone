import { password } from "../components/password.js";
let ssenseuser = JSON.parse(localStorage.getItem("ssenseuser"));
let thisuser = JSON.parse(localStorage.getItem("thisUser"));

let chamber = document.getElementById("loginchamber");

chamber.innerHTML = password();

if(thisuser.UserName){
    document.getElementById("email").value = thisuser.UserName;
}
let goToLogin = () => {
    event.preventDefault();
    console.log("I am going Back");
    window.location = "../pages/login.html";
}
let goToHome = () => {
    event.preventDefault();
    console.log("Password Entered");
    window.location = "../pages/landingpage.html";
}
document.getElementById("passform").addEventListener("submit", goToHome)
document.getElementById("wdetails").addEventListener("click", goToLogin)