import { useEffect, useState } from "react";
import FoodCategory from "./FoodCategory";
import ShopCover from "./ShopCover/ShopCover";


const Shop = () => {
    const category = FoodCategory()
    const [foodCategory, setFoodCategory] = useState('soup')
    const [food, setFood] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER}/getMenus`)
            .then(res => res.json())
            .then(data => {
                const select = data.filter(data => data.category === foodCategory)
                setFood(select)
            })
    }, [foodCategory])
    return (
        <div>
            <ShopCover></ShopCover>
            <div className="tabs lg:w-[50%] max-w-6xl w-full mx-auto mt-16">
                {
                    category.map(data => <div key={data} onClick={() => setFoodCategory(data)} className='tab tab-active mx-auto lg:font-bold text-gray-950 uppercase'>{data}</div>)
                }
            </div>


            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
                {
                    food.map(data =>
                        <div className=" relative lg:w-[350px] text-center" key={data._id}>
                            <img className="" src={data.image} alt="" />
                            <div className="bg-[#F3F3F3] p-2">
                                <h1 className="absolute top-5 right-5 bg-blue-400 text-white rounded p-1">${data.price}</h1>
                                <h1 className="font-bold">{data.name}</h1>
                                <h1 className="text-xs">{data.recipe}</h1>
                                <button className="text-orange-500 bg-[#E8E8E8] p-1 border-b-2 border-orange-400 rounded mt font-semibold mt-2 hover:bg-black">Add to Chart</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Shop;