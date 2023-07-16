import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import AxiosSecure from "./AxiosSecure";

const GetAllOrders = () => {
    const {user,loading}=useContext(AuthContext)
    const axiosSecure=AxiosSecure()
    const { isLoading:menuLoading, data: menu, refetch } = useQuery({
        queryKey: ['menu',user?.email],
        enabled:!loading ,
        queryFn: async () => {
            const data = await axiosSecure(`${import.meta.env.VITE_SERVER}/getSingleUserOrder/${user?.email}`)
            return data.data 
        }

    })
    return [menu,menuLoading,refetch]
};

export default GetAllOrders;