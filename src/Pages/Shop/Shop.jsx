import { useEffect, useState } from "react";
import FoodCategory from "./FoodCategory";
import ShopCover from "./ShopCover/ShopCover";
import AddFood from "./AddFood";


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
                    food.map(data =><AddFood data={data } key={data._id}></AddFood>
                    )
                }
            </div>
        </div>
    );
};

export default Shop;