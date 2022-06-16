// TO SEARCH ITEMS ITEMS : 
document.querySelector("#search_btn").addEventListener("click", searchQuery);

// SEARCH BAR
function searchQuery(){
    console.log("searchQuery Func Called !");
    let query = document.querySelector("#search_query").value;
    if(query === "shorts"){
        // REDIRECT TO ITEM PAGE OF SHORTS
    }else if(query === "tshirts"){
        // REDIRECT TO ITEM PAGE OF SHORTS
    }else{
        alert("NOT AVAILABLE!");
    }
}

// TO UPDATE CART ITEMS :
function updateCartcount(){
    document.querySelector("#item_count").innerText = '0';
    // IF NO PRODUCTS ADDED TO CART => 0
    // ELSE COUNT ELE AND UPDATE
}

// TO UPDATE USERNAME : 
function updateUsername(){  
    document.querySelector("#user_name").innerText = 'LOGIN';
    // IF USER EXISTS IN LS => SHOW USERNAME
    // IF USER DOES NOT EXISTS IN LS => SHOW LOGIN
}


updateUsername();
updateCartcount();
