// TO SEARCH ITEMS ITEMS :
document.querySelector("#search_btn").addEventListener("click", searchQuery);

// SEARCH BAR
function searchQuery() {
  console.log("searchQuery Func Called !");
  let query = document.querySelector("#search_query").value;
  if (query === "menswear") {
    // REDIRECT TO ITEM PAGE OF SHORTS
    window.location.href = "../HTML/mens.html";
  } else if (query === "womenswear") {
    // REDIRECT TO ITEM PAGE OF SHORTS
    window.location.href = "../HTML/womens.html";
  } else {
    alert("NOT AVAILABLE!");
  }
}

// TO UPDATE CART ITEMS :
function updateCartcount() {
  let countcartItems = JSON.parse(localStorage.getItem("cart-data"));
  // console.log(countcartItems);
  if(countcartItems === undefined){
    document.querySelector("#item_count").innerText = "0";
  }else{
    document.querySelector("#item_count").innerText = countcartItems.length;
  }
  
  // IF NO PRODUCTS ADDED TO CART => 0
  // ELSE COUNT ELE AND UPDATE
}

// TO UPDATE USERNAME :
function updateUsername() {
  let username = JSON.parse(localStorage.getItem("thisUser")) || {};
  // console.log(username.UserName);
  // IF USER EXISTS IN LS => SHOW USERNAME
  // IF USER DOES NOT EXISTS IN LS => SHOW LOGIN
  if (username.UserName === undefined && username.password == undefined) {
    document.querySelector("#user_name").innerText = "LOGIN";
  } else if (
    username.UserName !== undefined &&
    username.password !== undefined
  ) {
    document.querySelector("#user_name").innerText = "ACCOUNT";
  }
}



// IF ALREADY LOGGED-IN GO TO ACCOUNTS 
// THEN LOGIUT
document.querySelector("#user_name").addEventListener("click", toAccountPage);

function toAccountPage() {
    event.preventDefault();
    console.log("Hello");
    if(document.querySelector("#user_name").innerText === "ACCOUNT"){
        window.location.href = "../HTML/accounts.html";
    }else{
        window.location.href = "../HTML/login.html";
    }
}

document
  .querySelector("#company-icon-nav")
  .addEventListener("click", toLandingPage);
function toLandingPage() {
  window.location.href = "../index.html";
}

updateUsername();
updateCartcount();
