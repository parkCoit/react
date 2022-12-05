import './SignUp.css'

const SignUp = () => {
    return(<>
    
    <div class="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
    </div>
    <div class="container">
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required/>
    </div>
    <div class="container">
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>
    </div>
    <div class="container">
        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
    </div>
    
    </>)
}

export default SignUp