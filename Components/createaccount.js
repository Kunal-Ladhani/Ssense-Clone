let createaccount = () => {
    return `
    <h5>CREATE AN ACCOUNT</h6><br>
        <form id="newform">
            <label class="label" for="email">Email address</label><br>
            <input type="email" class="AcInputs" id="email" disabled><br><br>
            <label class="label" for="password">Password</label><br>
            <input type="password" class="AcInputs" id="password" required><br><br>
            <label class="label" for="gender">Sign up for updates and promotions</label>
            <div id="gselect">
            <input type="radio" id="MNS" name="gen" value="Mens">
            <label class="sel" for="MNS">MEN'S</label>
            <input type="radio" id="WMNS" name="gen" value="Womens">
            <label class="sel" for="WMNS">WOMEN'S</label>
            <input type="radio" id="NONE" name="gen" value="NoThanks" required>
            <label class="sel" for="NONE">NO THANKS</label>
            </div>
            <input type="submit" value="CREATE AN ACCOUNT" id="submit">
            <input type="button" value="BACK" id="back">
        </form>
    <p class="tandc">When you create an SSENSE account, we collect your email and other personal data to enhance your shopping experience and, subject to your agreement, to provide you with exclusive email updates, promotions and notifications. We may also use third party search engines and social media platforms to deliver our updates, promotions and notifications to you.</p><br>
    <p class="tandc">You may unsubscribe at any time.</p><br>
    <p class="tandc">To find out more, please visit our Privacy Policy.</p>`;
}

export { createaccount };