import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import SingleManageItem from "./SingleManageItem";


const ManageItem = () => {

    const {totalFood}=useLoaderData()
    const [currentPage,setCurrentPage]=useState(1)
    const [menu,setMenu]=useState([])
    const FoodPerPage=10
    const totalPage=Math.ceil(totalFood/FoodPerPage)
    const pageNumber=[...Array(totalPage).keys()]

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_SERVER}/getAllFood?page=${currentPage}&& limit=${FoodPerPage}`)
        .then(res=>res.json())
        .then(data=>setMenu(data))
    },[currentPage])


    return (
        <div className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
                {
                    menu?.map(food=><SingleManageItem key={food._id}food={food} ></SingleManageItem>)
                }
            </div>

            <div className="flex justify-center mt-7">
                {
                    pageNumber.map((number,i)=><div className="join" key={number}>
                    <input onClick={()=>setCurrentPage(i+1)} className="join-item btn btn-square" type="radio" name="options" aria-label={i+1}/>
                    
                  </div>)
                }
            </div>
        </div>
    );
};

export default ManageItem;