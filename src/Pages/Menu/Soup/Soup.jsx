import { useEffect, useState } from "react";
import Common from "../../../Shared/CommonView/Common";

const Soup = () => {

    const [soup,setSoup]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch(`${import.meta.env.VITE_SERVER}/getMenus`)
            .then(res=>res.json())
            .then(data=>{
                const offered=data.filter(data=>data.category==='soup')
                setSoup(offered)
                setLoading(false)
            })
    },[])
    return (
        <div>
            {
                loading?<h1 className="text-center text-xl lg:text-2xl text-cyan-950">loading......</h1>
                :
                <div className="max-w-6xl mx-auto w-full grid grid-cols-1 gap-10 lg:grid-cols-2">
                    {
                        soup.map(data=><Common data={data} key={data._id}></Common>)
                    }
                </div>
            }
        </div>
    );
};

export default Soup;