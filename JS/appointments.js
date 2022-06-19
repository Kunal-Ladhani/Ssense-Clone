
// importing appointment navbar and footer from components folder
import { appointment } from "../Components/appointments.js";
import { navbar } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";

// appending navbar
let navdiv = document.getElementById("navbar");
navdiv.innerHTML = navbar();

// appending footer
let footdiv = document.getElementById("footer");
footdiv.innerHTML = footer();

// appending appointments innerHTML
let chamber = document.getElementById("scontainer");
chamber.innerHTML = appointment();