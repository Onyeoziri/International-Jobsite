import React from "react";
import "./loginform.css"
import {useRef, useState, useEffect} from "react";


const LoginForm = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd,setPwd] = useState('');
    const [pwd2,setPwd2] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    },[])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user,pwd);
        setUser('');
        setPwd('');
        setPwd2('')
        setSuccess(true);
    }

    return (
        <> 
        {success ? (
            <section>
                <h1> You are logged in!</h1>
                <br />
                <p>
                    <a href= "#"> Go to Home</a>
                </p>
            </section>
        ) : ( 

        <section className ="loginbox">
        <p ref= {errRef} className = {errMsg ? "errmsg" :
        "offscreen"} aria-live= "assertive"> {errMsg}</p>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor= "username"> Email</label>
            <input
                type="text"
                id="username"
                ref= {userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)} 
                value={user}
                required
                />

            <label htmlFor= "password"> Password</label>
            <input
                type="password"
                id="password"
                ref= {userRef}
                autoComplete="off"
                onChange={(e) => setPwd(e.target.value)} 
                value={pwd}
                required
                />

<label htmlFor= "passwordConfirm"> Confirm Password</label>
            <input
                type="password"
                id="passwordConfirm"
                ref= {userRef}
                autoComplete="off"
                onChange={(e) => setPwd2(e.target.value)} 
                value={pwd2}
                required
                />

                <button>Sign In</button>

                <p>
                    Need an Account?<br />
                    <span className="line">
                        {/*put link her*/}
                        <a href="#">Sign Up</a>
                    </span>
                </p>
        </form>
        </section> 
        )}
        </>
    )
}
export default LoginForm