import { useEffect, useState } from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider } from 'firebase/auth'
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
// sign in using google method
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // console.log(result.user)
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message);
            })
    }

// sign in git hub method

const signInUsingGithub = () =>{
    signInWithPopup(auth, githubProvider)
    .then(result =>{
        setUser(result.user)
    })
}

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                // console.log('inside state change', user)
                setUser(user)
            }
        })
    }, [])

    return {
        logOut,
        user,
        error,
        signInUsingGoogle,
        signInUsingGithub
    }

}

export default useFirebase;