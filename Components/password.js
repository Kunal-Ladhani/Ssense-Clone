let password = () => {
    return `
    <h5>LOGIN</h6>
        <form id="passform">
            <label class="label" for="email">Email address</label><br>
            <input type="email" class="AcInputs" id="email" disabled><br><br>
            <label class="label" for="password">Password</label><br>
            <input type="password" class="AcInputs" id="password" required><br><br>
            <input type="submit" value="CONTINUE" id="submit">
            <label class="label" ><a>Forgot your password?</a></label>
            <label class="label"><a href="./login.html">Not your email?</a></label>
        </form>`;
}

export { password };