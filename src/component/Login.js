import React, {useState} from "react";
import './Login.css';

export const Login = (props) => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }
    return(
        // body
        <div>
            {/* top bar */}
            <div className="top-bar">
                <div className="logo-container">
                 <img src='/images/chotter-logo.png'  height="50"/>
                </div>
            </div>
            <div>
                {/* left side */}
                <div className="login-image-container">
                     <img src='/images/login-photo.png'  height="100%"/>
                </div>
                {/* right side */}
                <div className="form-container">
                <div className="form-box">
                    <h2 className="header1">Welcome Back!</h2>
                    <p className="header2">Login to continue learning.</p>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email" id="email" className="email"/>
                    <br/>
                    <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password"/>
                    <br/>
                    <button type="submit"><a className="to-home" href="/home">Log In</a></button>
                </form>
                <div className="sign-up-redirect">
                        <div className="header3">
                            <h4 >Don't have an account? &nbsp;</h4>
                        </div>
                        <div className="sign-up-redirect-button-container">
                        <a className='sign-up-redirect-button' href="/register">Sign Up</a>
                        </div>
                    </div> 
                </div>
                </div>
            </div>

        </div>
    )
}
export default Login;