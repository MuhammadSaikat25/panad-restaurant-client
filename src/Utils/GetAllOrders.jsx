import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";

const GetAllOrders = () => {
    const {user}=useContext(AuthContext)
    const { isLoading:menuLoading, data: menu, refetch } = useQuery({
        queryKey: ['menu',user?.email],
        queryFn: async () => {
            const data = await fetch(`${import.meta.env.VITE_SERVER}/getSingleUserOrder/${user?.email}`)
            return data.json()
        }

    })
    return [menu,menuLoading,refetch]
};

export default GetAllOrders;