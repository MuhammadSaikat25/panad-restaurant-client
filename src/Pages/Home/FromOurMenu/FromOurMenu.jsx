import { useEffect, useState } from "react";
import SingleMenu from "./SingleMenu";

const FromOurMenu = () => {

    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER}/getMenus`)
            .then(res => res.json())
            .then(data => {
                const popular = data.filter(data => data.category === 'popular')
                setMenu(popular)
            })
    }, [])
    return (
        <div className="mt-[92px] grid grid-cols-1 lg:grid-cols-2 gap-5">
            {
                 menu.map(data => <SingleMenu data={data} key={data._id}></SingleMenu>)
            }
        </div>
    );
};

export default FromOurMenu;