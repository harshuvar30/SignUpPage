import React, { useState } from 'react'
import { useSignup } from '../hooks/useSignup';

const Signup = () =>{
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [fullName,setName] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirm] = useState('');
    const [termsChecked, setTermsChecked] = useState(false);
    const { signup, isLoading, error } = useSignup();
    const handleSubmit = async (e)=>{
        e.preventDefault()
        await signup(fullName,username,email,password,confirmPassword);
    }
    return (
        <form className='signup' onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <label>Name:</label>

            <input 
            type="text"
            onChange={(e) =>setName(e.target.value)}
            value={fullName}
            />
            <label>Username:</label>

            <input 
            type="text"
            onChange={(e) =>setUsername(e.target.value)}
            value={username}
            />
            <label>Email:</label>

            <input 
            type="email"
            onChange={(e) =>setEmail(e.target.value)}
            value={email}
            />
            <label>Password:</label>
            
            <input 
            type="password"
            onChange={(e) =>setPassword(e.target.value)}
            value={password}
            />
             <label> Confirm Password:</label>
            
            <input 
            type="password"
            onChange={(e) =>setConfirm(e.target.value)}
            value={confirmPassword}
            />
           <div className="tacbox">
                <input id="checkbox" type="checkbox" onChange={(e) =>setTermsChecked(e.target.value)} value={termsChecked} />
                <label className='para' for="checkbox"> I agree to these <a href="#">Terms and Conditions</a>.</label>
                </div>
            <button disabled={isLoading}>Sign Up</button>
            {error && <div className='error'>{error}</div>}

        </form>
    )
}

export default Signup;