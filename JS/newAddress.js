
// importing newAddress , navbar, footer from components folder
import { naddress } from "../Components/newAddress.js";
import { navbar } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";

// appending navbar
let navdiv = document.getElementById("navbar");
navdiv.innerHTML = navbar();

// appending footer
let footdiv = document.getElementById("footer");
footdiv.innerHTML = footer();

// appending newAddress innerHTML
let chamber = document.getElementById("scontainer");
chamber.innerHTML = naddress();