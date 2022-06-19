
// importing orderhistory, navbar, footer from components folder
import { orderhistory } from "../Components/orderhistory.js";
import { navbar } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";

// appending navbar
let navdiv = document.getElementById("navbar");
navdiv.innerHTML = navbar();

// appending footer
let footdiv = document.getElementById("footer");
footdiv.innerHTML = footer();

// appending orderhistory innerHTML
let container = document.getElementById("scontainer");
container.innerHTML = orderhistory();