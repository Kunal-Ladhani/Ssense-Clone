function navbar() {
  return `<div id="navbar-left">
      <div class="links">
        <a href="/Unit-3-Project/HTML/mens.html">MENSWEAR</a>
        <a href="/Unit-3-Project/HTML/womens.html">WOMENSWEAR</a>
        <a href="#">EVERYTHING ELSE</a>
        <!-- <a href="/">SEARCH</a> -->
        <div class="dropdown">
          <button class="dropbtn">SEARCH</button>
          <div class="dropdown-content">
            <div>
              <a href="/Unit-3-Project/HTML/mens.html">MENSWEAR</a>
              <a href="/Unit-3-Project/HTML/womens.html">WOMENSWEAR</a>
              <a href="#">EVERYTHING ELSE</a>
            </div>
            <input
              type="text"
              name=""
              id="search_query"
              placeholder="SEARCH"
            />
            <div id="search_btn">
              <img src="/Unit-3-Project/images/search.svg" alt="" />
            </div>
            <input type="checkbox" name="" id="" />
            <span>SALES ONLY</span>
            <!-- <button>CLOSE</button> -->
          </div>
        </div>
      </div>
    </div>
    <div id="icon">
      <img
        src="https://res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg"
        alt="iconn ssense"
      />
    </div>
    <div id="navbar-right">
      <div class="links2">
        <a href="#">ENGLISH</a>
        <a href="/Unit-3-Project/HTML/login.html" id="user_name">LOGIN</a>
        <a href="#">WISHLIST</a>
        <a href="#"
          >SHOPPING BAG (<div id="item_count"><!--append cart-items-count here--></div>)</a
        >
      </div>
    </div>`;
}

export { navbar };
