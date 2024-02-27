import { auth, googleProvider } from "../config/firebase-config";
import React from 'react';
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
// other imports...

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
        
        console.log(auth?.currentUser?.email)
        const navigate = useNavigate();
    
    
    
    
    
    
    
    
    
    
    
    // const history = useHistory();
    // // other states...
    // const handleLogin = () => {
    //     // Perform your authentication logic here

    //     // If authentication is successful, navigate to another route
    //     history.push('/dashboard');
    // };

    // return (
    //     <div>
    //         {/* Your login form goes here */}
    //         <button onClick={handleLogin}>Log in</button>
    //     </div>
    // );
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/DashboardPage"); // redirects to the dashboard page
        } catch (error) {
            console.error(error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="login-container">
            <button className="button signin" onClick={signInWithGoogle}>Sign in</button>
            <button className="button logout" onClick={logout}>Logout</button>
        </div>
    );
}