import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {FaFacebook} from 'react-icons/fa';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, handleGoogleSignIn, initializeLoginFramework } from './LoginManager';
import { userContext } from '../../App';




const Login = () => {

    const [signInUser, setSignInUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: ''
    })


    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    

    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
            handleResponse(res,true)
        })
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);
        }
     }

    const handleChange = (e) => {
        let isFieldValid = true;
        if(e.target.name === "email"){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === "password"){
            const isPasswordValid = e.target.value.length > 6;
            const PasswordNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && PasswordNumber;
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(signInUser && user.email && user.password){
            createUserWithEmailAndPassword(user.email, user.password)
            .then( res => {
                handleResponse(res,true)
            })
        }
        if(!signInUser && user.email && user.password){
            signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                handleResponse(res,true)
            });
        }
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="signIn-form">
                            <h3 style={{marginBottom: '20px'}}>Create an account</h3>
                            <form action="#" onSubmit={handleSubmit}>
                                <div className="form-group">
                                   {signInUser && <input name="firstName" onChange={handleChange} type="text" placeholder="First Name" required/>} 
                                </div>
                                <div className="form-group">
                                {signInUser && <input name="lastName" onChange={handleChange} type="text" placeholder="Last Name" required/>}
                                </div>
                                <div className="form-group">
                                    <input name="email" onChange={handleChange} type="email" placeholder="Username or Email" required/>
                                </div>
                                <div className="form-group">
                                    <input name="password" onChange={handleChange} type="password" placeholder="Password" required/>
                                </div>
                                <div className="form-group">
                                    {signInUser && <input onChange={handleChange} type="password" placeholder="Confirm Password" required/>}
                                </div>
                                <input onClick={handleSubmit} type="submit" value={signInUser ? 'create account' : 'Log in' }/>
                                
                            </form>
                            <p className="footer-text">{signInUser ? 'Already have an account?' : "Don't have an account?" } <span className="toggleLogin" onClick={() => setSignInUser(!signInUser)}>{signInUser ? 'Log in' : 'Create an account'}</span></p>
                        </div>
                    </div>
                </div>
            </div>

           {/* {user.success ? <span className="success">successfully {signInUser ? 'created account' : 'logged in' }</span> : <span className="error">{user.error}</span> } */}

            <div className="facebookLogin">
                <button style={{outline: 'none'}} className="signInWithGoogle"><FaFacebook className="facebookIcon" style={{color: '#ff11ff'}}/> <span className="facebookText">Continue with google</span></button>
            </div>
            <div className="googleLogin">
                <button onClick={googleSignIn} style={{outline: 'none'}} className="signInWithGoogle"><FcGoogle className="googleIcon"/> <span className="googleText">Continue with google</span></button>
            </div>
        </div>
    );
};

export default Login;