
import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "./AxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";

const GetAllUser = () => {
    const{loading,user}=useContext(AuthContext)
    const axiosSecure=AxiosSecure()
    const {data, isLoading:userLoading,refetch } = useQuery({
        queryKey: ['user'],
        enabled:!loading && !! user?.email && !! localStorage.getItem('jwt-token'),
        queryFn: async () => {
            const data = await axiosSecure(`${import.meta.env.VITE_SERVER}/getAllUser`)
            return data.data 
        }

    })
    return [data,userLoading,refetch]
};

export default GetAllUser;