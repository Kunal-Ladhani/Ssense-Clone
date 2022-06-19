import { cart_data } from "../Components/cart.js";

import { navbar } from "../Components/navbar.js";

import { footer } from "../Components/footer.js";

document.getElementById("footer").innerHTML = footer();

document.getElementById("navbar").innerHTML = navbar();

let data1 = [
    {
        designer:"CLOUD7",
        name:"Black Medium Hyde Park Collar",
        price:85,
        image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/221226M668013_1/cloud7-black-medium-hyde-park-collar.jpg"
    },
    {
        designer:"MORE JOY",
        name:"White 'Sex' Mug",
        price:21,
        image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/221555M610002_1/more-joy-white-sex-mug.jpg"
    },
    {
        designer:"JUSTINE CLENQUET",
        name:"Silver Laura Earrings",
        price:70,
        image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/221235F022054_1/justine-clenquet-silver-laura-earrings.jpg"
    },
    {
        designer:"JUSTINE CLENQUET",
        name:"Silver & Gold Tori Earrings",
        price:67,
        image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/221235F022044_1/justine-clenquet-silver-and-gold-tori-earrings.jpg"
    },
    {
        designer:"JUSTINE CLENQUET",
        name:"SSENSE Exclusive Silver & Pink Vickie Earrings",
        price:54,
        image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/221235F022059_1/justine-clenquet-ssense-exclusive-silver-and-pink-vickie-earrings.jpg"
    },
    {
        designer:"FARIS",
        name:"Gold Tear Pendant Necklace",
        price:75,
        image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/221069F023010_1/faris-gold-tear-pendant-necklace.jpg"
    },
    {
        designer:"MASTER-PIECE CO",
        name:"Brown Carabiner Keychain",
        price:39,
        image:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/221401M148003_1/master-piece-co-brown-carabiner-keychain.jpg"
    },
]

let data = JSON.parse(localStorage.getItem("cart-data")) || [];
let container = document.getElementById("append_products");
let container1 = document.getElementById("text_justify1");
let container2 = document.getElementById("text_justify2");
let container3 = document.getElementById("Populor_items_data");

console.log(data);

// product added to cart
function Append_data(data, container, container1, container2) {
  if (data.length < 1) {
    Append_null();
  } else {
    container.innerHTML = null;
    let total = 0;
    data.forEach((el) => {
      let hr = document.createElement("hr");


        let product_div = document.createElement("div")
        let img = document.createElement("img")
        img.src = el.image

      let product_desc_div = document.createElement("div");

      let flex = document.createElement("div");

      let div = document.createElement("div");

        let p1 = document.createElement("p")
        p1.innerText = el.designer
        let p2 = document.createElement("p")
        p2.innerText = el.name
        let p3 = document.createElement("p")
        p3.innerText = "SIZE: S"

      div.append(p1, p2, p3);

      let price = document.createElement("p");
      price.innerText = "$" + el.price + " USD";
      total = total + +el.price;

      flex.append(div, price);
      flex.classList.add("flex");

      let cart_remove_div = document.createElement("div");

      let p4 = document.createElement("p");
      p4.innerText = "Move to Wishlist";
      let p5 = document.createElement("p");
      p5.innerText = "REMOVE";
      p5.addEventListener("click", function () {
        REMOVE_DATA(el, data);
      });

      cart_remove_div.append(p4, p5);
      cart_remove_div.classList.add("cart_remove_div");

      product_desc_div.append(flex, cart_remove_div);
      product_desc_div.classList.add("product_desc_div");

      product_div.append(img, product_desc_div);
      product_div.classList.add("product_div");
      container.append(hr, product_div);
    });
    total_money(total, container1, container2);
  }
}

// to append the total money of the products
function total_money(data, container1, container2) {
  container1.innerHTML = null;
  container2.innerHTML = null;

  container1.innerText = "$" + data + " USD";
  container2.innerText = "$" + data + " USD";
}

// to remove the products of cart
function REMOVE_DATA(el) {
  data = data.filter((element) => {
    return el !== element;
  });
  localStorage.setItem("cart-data", JSON.stringify(data));
  Append_data(data, container, container1, container2);
}

// nullify the cart page when cart products are not there
function Append_null() {
  document.body.innerHTML = cart_data();
}

// to append the popular products category
function Popular_data(data1, container3) {

    data1.forEach((el)=>{
    let img = document.createElement("img")
    img.src = el.image

    let designer = document.createElement("p")
    designer.innerText = el.designer

    let price = document.createElement("p");
    price.innerText = el.price;

    let name = document.createElement("p")
    name.innerText = el.name

    let AddToBag = document.createElement("p");
    AddToBag.innerText = "ADD TO BAG";
    AddToBag.addEventListener("click", function () {
      PopularAdd(el);
    });

    let div = document.createElement("div");
    div.append(img, designer, name, price, AddToBag);

        container3.append(div)
    })
}

function PopularAdd(el) {
  data.push(el);
  localStorage.setItem("cart-data", JSON.stringify(data));
  Append_data(data, container, container1, container2);
}

Popular_data(data1, container3);

Append_data(data, container, container1, container2);

document.getElementById("payment_reload").addEventListener("click", redirect);

function redirect() {
  window.location.href = "../HTML/paymentPage.html";
}
