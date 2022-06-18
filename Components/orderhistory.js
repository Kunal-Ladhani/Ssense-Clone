let orderhistory = () =>{
    return `
    <div id="ssidebar">
        <p>Account</p><br>
        <a class="anchor" href="./accounts.html">Account Details</a><br>
        <a class="anchor" href="./emailpreference.html">Email Preferences</a><br>
        <a class="anchor" href="./orderhistory.html">Order History</a><br>
        <a class="anchor" href="./appointments.html">Appointments</a><br>
        <a class="anchor" href="./addresses.html">Addresses</a><br>
        <a class="anchor" id="logout" href="./login.html">Logout</a>
    </div>
    <div id="ordercontainer">
        <div id="odetails">
            <h5>ORDER HISTORY</h5>
        </div>
        <hr>
        <div id="ocontainer"></div>
    </div>`;
}

export { orderhistory };