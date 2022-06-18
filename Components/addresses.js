let address = () => {
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
    <div id="addresscontainer"></div>
    <div id="addresschamber">
        <h3 class="acdetail">Saved Addresses</h3><br>
        <div id="addresscontainer"></div>
        <div id="addaddress"><button id="submitaddress">ADD NEW ADDRESS</button></div>
    </div>`;
}

export {address};