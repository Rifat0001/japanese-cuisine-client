import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.init';
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const googleSign = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubSign = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const handleUpdateProfile = (loggedUser, name, photoUrl) => {
        setLoading(true);
        updateProfile(loggedUser, {
            displayName: name, photoURL: photoUrl
        })
            .then(() => {
                console.log('user name updated');
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    // for check is the user is sign in or not? 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged user', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user, createUser, signIn, logOut, handleUpdateProfile, googleSign, githubSign
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;