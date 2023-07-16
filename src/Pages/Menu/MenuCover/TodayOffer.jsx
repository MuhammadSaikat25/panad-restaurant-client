import { useEffect, useState } from "react";
import Common from "../../../Shared/CommonView/Common";
import SectionTitle from "../../../Utils/SectionTitle";

const TodayOffer = () => {
    const [offer,setOffer]=useState([])
    const [loading,setLoading]=useState(false)
    console.log(offer)
    useEffect(()=>{
        setLoading(true)
        fetch(`${import.meta.env.VITE_SERVER}/getMenus`)
            .then(res=>res.json())
            .then(data=>{
                const offered=data.filter(data=>data.category==='offered')
                setOffer(offered)
                setLoading(false)
            })
    },[])
    return (
        <div>
            <SectionTitle header={"---Don't miss---"} subHeading={"TODAY'S OFFER"}></SectionTitle>
            {
                loading?<h1 className="text-center text-xl lg:text-2xl text-cyan-950">loading......</h1>
                :
                <div className="max-w-6xl mx-auto w-full grid grid-cols-1 gap-10 lg:grid-cols-2">
                    {
                        offer.map(data=><Common data={data} key={data._id}></Common>)
                    }
                </div>
            }
        </div>
    );
};

export default TodayOffer;