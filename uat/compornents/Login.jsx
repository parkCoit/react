
import { useState } from "react"
import "uat/style/Login.css"
import {loginApi} from 'uat/api'

const Login = () =>{

    const [inputs, setInputs] = useState({})
    const {username, password} = inputs

    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target
        setInputs({...inputs, [name]: value})
    }

    const onClick = e => {
        e.preventDefault()
        const loginRequest = {username, password}
        alert(`사용자 이름 : ${JSON.stringify(loginRequest)}`)
        loginApi(loginRequest)
    }

    return(<>
        USERNAME : <input type="text" name="username" onChange={onChange} /><br/>
        PASSWORD : <input type="text" name="password" onChange={onChange} /><br/>
        <button onClick={onClick}> 로그인 </button>
    </>)
}

export default Login



/**
 import 'uat/style/Login.css'

const Login = () => {
    return (
        <>
        <h2>Login Form</h2>

        <form action="/action_page.php" method="post">
        <div className="imgcontainer">
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar"/>
        </div>

        <div className="container">
            <label htmlFor="uname"><b>Username</b></label>
            <input className='input_text' type="text" placeholder="Enter Username" name="uname" required/>

            <label htmlFor="psw"><b>Password</b></label>
            <input className='input_password' type="password" placeholder="Enter Password" name="psw" required/>
                
            <button type="submit" className='button'>Login</button>
            <label>
            <input type="checkbox" checked="checked" name="remember"/> Remember me
            </label>
        </div>

        <div className="container" style={{backgroundColor:"#f1f1f1"}}>
            <button type="button" className="cancelbtn button">Cancel</button>
            <span className="psw">Forgot <a href="/">password</a></span>
        </div>
        </form>
        </>
    )
}

export default Login;
  
*/