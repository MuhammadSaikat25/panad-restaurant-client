import { useQuery } from "@tanstack/react-query";

const GetAllMenu = () => {


    // =========didn't used 
    const { isLoading:menuLoading, data: menu, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const data = await fetch(`${import.meta.env.VITE_SERVER}/getMenus`)
            return data.json()
        }

    })
    return [menu,menuLoading,refetch]
};

export default GetAllMenu;