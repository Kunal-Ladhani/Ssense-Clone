let appointment = () => {
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
    <div id="appointcontainer">
        <div id="appointheader">
            <h3>Appointments</h3>
        </div><br><br>
        <div id="acontainer">
            <div id="appointinfo">
                <div id="visitingdiv">
                    <div class="headerdiv"><p>VISITING US</p></div>
                    <div class="infodiv"><p>In order to have full access to our selection of products, book items from our online catalog to try on and purchase in-store. Our retail space is equipped with fitting rooms and personal stylists to assist you.</p><p>The health and safety of our to priority. We have taken the necessary measures to welcome our guests into a safe environment, complying to all local guidelines provided by Government and Health authorities.</p><p>Please refer to the <a href="">COVID-19 Update</a> page for additional information.</p></div>
                </div>
                <div id="bookingdiv">
                    <div class="headerdiv"><p>BOOK ITEMS IN WISHLIST</p></div>
                    <div class="infodiv"><p>Only items saved to Wishlist can be booked for an appointment. We recommend that you add additional sizes of the same style to find the best fit</p></div>
                </div>
                <div id="locationdiv">
                    <div class="headerdiv"><p>LOCATION</p></div>
                    <div class="ssensemontreal"><p>SSENSE MONTREAL</p></div>
                    <div class="ssenseaddress"><p>418 rue Saint-Sulpice</p><p>Montreal, QC, H2Y 2V5</p><p>+1 514 289 1906</p><p><a>Get Directions</a></p></div>
                    <div><button class="appointbutton">BOOK AN APPOINTMENT</button></div>
                </div>
            </div>
            <div id="appointshedule">
                <div id="myappointmentdiv">
                    <div class="headerdiv"><p>MY APPOINTMENTS</p></div>
                </div>
                <hr>
                <div id="upcomingdiv">
                    <div class="headerdiv"><p>UPCOMING (0)</p></div>
                    <div class="upcominginfo">
                        <p style="font-weight: bold;">No appointments sheduled</p>
                    </div>
                </div>
                <hr>
                <div id="pastdiv">
                    <div class="headerdiv"><p>PAST (0)</p></div>
                    <div class="pastinfo">
                        <p style="font-weight: bold;">No appointment history</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

export { appointment } ;