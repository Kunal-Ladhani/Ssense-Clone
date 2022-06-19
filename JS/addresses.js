
// importing address, navbar, footer
import { address } from "../Components/addresses.js";
import { navbar } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";

// appending navbar
let navdiv = document.getElementById("navbar");
navdiv.innerHTML = navbar();

// appending footer
let footdiv = document.getElementById("footer");
footdiv.innerHTML = footer();

// appending address file innerHTML
let chamber = document.getElementById("scontainer");
chamber.innerHTML = address();

// defining goTonewAddress funtion
let goTonewAddress = () => {
    // redirecting to the newAddress page
    window.location = "../HTML/newAddress.html";
}

// on clicking the submitaddress calling goTonewAddress function
document.getElementById("submitaddress").addEventListener("click", goTonewAddress);