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
            <div className="dashboard">
                {<button className="button logout" onClick={logout}>Logout</button>}
            </div>
            <div className="App"></div>
        </div>
    );
    return (
        <div>
            <div className="dashboard"></div>
            <div className="App"></div>
        </div>
    );

}