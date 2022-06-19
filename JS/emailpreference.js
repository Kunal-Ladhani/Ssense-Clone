
// importing emailpref navbar footer from components folder
import { emailpref } from "../Components/emailpreference.js";
import { navbar } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";

// appending navbar
let navdiv = document.getElementById("navbar");
navdiv.innerHTML = navbar();

// appending footer
let footdiv = document.getElementById("footer");
footdiv.innerHTML = footer();

// appending emailpreference innerHTML
let container = document.getElementById("scontainer");
container.innerHTML = emailpref();