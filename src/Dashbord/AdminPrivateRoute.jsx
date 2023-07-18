import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import GetAllUser from "../Utils/GetAllUser";

const AdminPrivateRoute = ({children}) => {
    const navigate=useNavigate()
    const {user,loading}=useContext(AuthContext)
    const [data,userLoading]=GetAllUser()
    const Admin=data?.find(data=>data?.email===user)
    
    if(loading&&userLoading){
        return <h1>loading....</h1>
    }
    if(user&&Admin?.role==='admin'){
        return children
    }
    else{
        navigate('/logIn')
    }
};

export default AdminPrivateRoute;