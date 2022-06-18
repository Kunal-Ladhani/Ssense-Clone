let login = () => {
    return `
    <h5>LOGIN OR CREATE ACCOUNT</h6><br>
        <form id="loginform">
            <label class="label" for="email">Email address</label><br>
            <input class="AcInputs" type="email" id="email" required><br><br>
            <input type="submit" value="CONTINUE" id="submit">
        </form>`;
}

export { login };