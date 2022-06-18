let account = () => {
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
    <div id="acchamber">
        <h3 class="acdetail">Account Details</h3><br>
        <p>Edit your preferences below</p>
        <h5>Account Information</h5>
            <form id="accountform">
                <label class="label" for="fname">First Name</label><br>
                <input type="text" class="AcInputs" id="fname"><br><br>
                <label class="label" for="fname">Last Name</label><br>
                <input type="text" class="AcInputs" id="lname"><br><br>
                <label class="label" for="email">Email address</label><br>
                <input type="email" class="AcInputs" id="email" disabled><br><br>
                <h5>Account Password</h5>
                <label class="label" for="password">Old Password</label><br>
                <input type="password" class="AcInputs" id="password" required><br><br>
                <label class="label" for="password">New Password</label><br>
                <input type="password" class="AcInputs" id="password" required><br><br>
                <div id="submitform"><input type="submit" value="SAVE CHANGES" id="submit"></div>
            </form>
    </div>`;
}

export { account };