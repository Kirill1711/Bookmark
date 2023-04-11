import React, { useState } from "react";
import './modale.css';

const Modal = ( { signInActive, setsignInActive, joinActive, setjoinActive, changeSinhIn, changeJoin} ) => {
    const [show, setShow] = useState(false);

    return (<>
    
        <div className={signInActive ? 'modalSignIn active' : 'modalSignIn'} onClick={() => setsignInActive(false)}>
        <div className={signInActive ? 'modal-container active' : 'modal-container'} onClick={(event)=>event.stopPropagation()}>
        <div className="signInWrapper">
            <form className="signInForm">
            <h1>Sign in to BookMark</h1>
            <div className="signInInner"><span>Username / Email address</span>
            <input key='pass1' placeholder="Username / Email address"></input>
            <span>Password</span>
            
            <input key='pass2' placeholder="Password..." type={show ? 'text' : 'password'} ></input>
            <div className="input-pass">
                <input type="checkbox" id="showpassone" />
                <label htmlFor="showpassone" onClick={() => setShow(!show)}>{show ? 'Hide password' : 'Show password'}</label></div>
            </div>

            <div className="signInInner-container">
            <button className="signInButton">Sign In</button>
            <a href="#">Password forgotten?</a>
            </div>
            <p><span>New to bookmark?</span><a href="#" onClick={() => changeSinhIn()}>Join now</a></p>
        </form></div>
        </div>
        </div>


         <div className={joinActive ? 'modaljoin active' : 'modaljoin'} onClick={() => setjoinActive(false)}>
             <div className={joinActive ? 'modal-container active' : 'modal-container'} onClick={(event)=>event.stopPropagation()}>
             <div className="signInWrapper">
            <form className="signInForm">
            <h1>{joinActive ? 'Join BookMark' : 'Sign in to BookMark'}</h1>
            <div className="signInInner">
            <span>Username</span>
            <input key='username' placeholder="Username"></input>
            
            <span>Email address</span>
            <input key='emailaddress' placeholder="Email address"></input>
            <span>Password</span>
            
            <input key='pass4' placeholder="Password..." type={show ? 'text' : 'password'}></input>
            <div className="input-pass">
                <input type="checkbox" id="showpasstwo" />
                <label htmlFor="showpasstwo" onClick={() => setShow(!show)}>{show ? 'Hide password' : 'Show password'}</label></div>
            </div>

            <div className="signInInner-container">
            <button className="signInButton">Sign In</button>
            </div>
            <p><span>Already a member?</span><a href="#" onClick={() => changeJoin()}>Sign In</a></p>
        </form></div>
            </div>
        </div>
        </>
    )
}




export default Modal;


