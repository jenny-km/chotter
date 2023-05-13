import React, {useState} from "react";
import './Register.css';

function Register(props){
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[name, setName] = useState('');

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
                     <img src='/images/signup-photo.png'  height="100%"/>
                </div>
                {/* right side */}
                <div className="form-container">
                <div className="form-box">
                    <h2 className="header1-register">Let's Get You Started!</h2>
                    <p className="header2-register">Create Your Account Here.</p>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Name"/>
                    <br/>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email" id="email" className="email"/>
                    <br/>
                    <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password"/>
                    <br/>
                    <button type="submit">Sign Up</button>
                </form>
                <div className="sign-up-redirect">
                        <div className="header3-register">
                            <h4 >Already have an account? &nbsp;</h4>
                        </div>
                        <div className="log-in-redirect-button-container">
                            <a className='log-in-redirect-button' href="/">Log In</a>
                           
                        </div>
                    </div> 
                </div>
                </div>
            </div>

        </div>
    )
}
export default Register;