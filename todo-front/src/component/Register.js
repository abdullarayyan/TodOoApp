import '../index.css'
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            history.push('/');
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const personalityData = { name, email, password };

        fetch('http://127.0.0.1:8000/api/register/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
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

                    <div>Register Page</div>

                    <div className='wrapper'>
                        <div className='form-wrapper'>
                            <h2>Register</h2>
                            <form onSubmit={handleSubmit} >
                                <div className='fullName'>
                                    <label htmlFor="fullName">Full Name</label>
                                    <input type='text' required name='fullName' value={name} onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div className='email'>
                                    <label htmlFor="email">Email</label>
                                    <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className='password'>
                                    <label htmlFor="password">Password</label>
                                    <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <div className='info'>
                                    <small>Password must be eight characters in length.</small>
                                </div>
                                <div className='submit'>
                                    <button>Sign Up !</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}

export default Register;