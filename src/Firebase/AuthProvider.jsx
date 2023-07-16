import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut,signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    console.log(user)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return (signOut(auth)
            .then(res => { })
            .catch(error => { })
        )
    }

    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = {
        createUser, user,logOut,logIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;