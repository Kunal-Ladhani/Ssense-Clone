
// importing account navbar and footer from the components folder
import { account } from "../Components/accounts.js";
import { navbar } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";

// appending navbar
let navdiv = document.getElementById("navbar");
navdiv.innerHTML = navbar();

// appending footer
let footdiv = document.getElementById("footer");
footdiv.innerHTML = footer();

// appending accounts innerHTML
let container = document.getElementById("scontainer");
container.innerHTML = account();