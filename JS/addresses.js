import { address } from "../Components/addresses.js";
import { navbar } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";

let navdiv = document.getElementById("navbar");
navdiv.innerHTML = navbar();

let footdiv = document.getElementById("footer");
footdiv.innerHTML = footer();

let chamber = document.getElementById("scontainer");
chamber.innerHTML = address();

let goTonewAddress = () => {
    window.location = "../HTML/newAddress.html";
}

document.getElementById("submitaddress").addEventListener("click", goTonewAddress);


