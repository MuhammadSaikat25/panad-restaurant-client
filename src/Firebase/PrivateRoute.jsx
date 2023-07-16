import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const navigate=useNavigate()
    const {user,loading}=useContext(AuthContext)

    if(loading){
        return <h1></h1>
    }
    if(user){
        return children
    }
    else{
        navigate('/logIn')
    }
};

export default PrivateRoute;