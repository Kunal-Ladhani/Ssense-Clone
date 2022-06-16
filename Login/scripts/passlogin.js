import { password } from "../components/password.js";
let ssenseuser = JSON.parse(localStorage.getItem("ssenseUser"));
let thisuser = JSON.parse(localStorage.getItem("thisUser"));

let chamber = document.getElementById("loginchamber");
chamber.innerHTML = password();

document.getElementById("email").value = thisuser.UserName;
let goToLogin = () => {
    event.preventDefault();
    window.location = "../pages/login.html";
}
let goToHome = () => {
    event.preventDefault();
    let pass = document.getElementById("password").value;
    if(pass != ssenseuser.password){
        alert("Sorry! Wrong Password!");     
    }
    else{
        window.location = "../pages/landingpage.html";
    }
}
document.getElementById("passform").addEventListener("submit", goToHome)
document.getElementById("wdetails").addEventListener("click", goToLogin)