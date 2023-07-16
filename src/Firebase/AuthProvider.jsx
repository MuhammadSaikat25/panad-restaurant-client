import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import app from "./firebase";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)
    console.log(user)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return (signOut(auth)
            .then(res => { })
            .catch(error => { })
        )
    }

    const logIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const upDateUser=(name)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = {
        createUser, user,logOut,logIn,upDateUser,loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

