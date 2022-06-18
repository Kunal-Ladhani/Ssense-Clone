import { address } from "../Components/addresses.js";

let chamber = document.getElementById("scontainer");
chamber.innerHTML = address();

let goTonewAddress = () =>{
    window.location = "../HTML/newAddress.html";
}

document.getElementById("submitaddress").addEventListener("click", goTonewAddress);


