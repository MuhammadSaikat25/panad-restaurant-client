import DessertCoverImg from "./Dessert/DessertCoverImg/DessertCoverImg";
import Desserts from "./Dessert/Desserts";
import MenuCoverImg from "./MenuCover/MenuCoverImg";
import TodayOffer from "./MenuCover/TodayOffer";

const Menu = () => {
    return (
        <div>
            <MenuCoverImg></MenuCoverImg>
            <TodayOffer></TodayOffer>
            {/* ======== Dessert Section======= */}
            <div className="">
                <DessertCoverImg></DessertCoverImg>
                <Desserts></Desserts>
            </div>
        </div>
    );
};

export default Menu;