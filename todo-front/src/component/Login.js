import Header from "./Header";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            history.push('/');
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        let personalityData = { email, password };

        fetch('http://127.0.0.1:8000/api/login/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(personalityData)
        }).then(() => {
            localStorage.setItem("user-info", JSON.stringify(personalityData))
            history.push('/');
        })
    }

    return (
        <React.Fragment>
            <Header />

            <div className="App">
                <div className="content">
                    <div>Login Page</div>
                    <div className='wrapper'>
                        <div className='form-wrapper'>
                            <h2>Login</h2>
                            <form >
                                <div className='email'>
                                    <label htmlFor="email">Email</label>
                                    <input type='email' onChange={(e) => setEmail(e.target.value)} name='email' required />
                                </div>
                                <div className='password'>
                                    <label htmlFor="password">Password</label>
                                    <input type='password' onChange={(e) => setPassword(e.target.value)} name='password' required />
                                </div>
                                <div className='info'>
                                    <small>Password must be eight characters in length.</small>
                                </div>
                                <div className='submit'>
                                    <button onClick={handleSubmit}>Login !</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}

export default Login;