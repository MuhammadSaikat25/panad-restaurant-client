import DessertCoverImg from "./Dessert/DessertCoverImg/DessertCoverImg";
import Desserts from "./Dessert/Desserts";
import MenuCoverImg from "./MenuCover/MenuCoverImg";
import TodayOffer from "./MenuCover/TodayOffer";
import SoupImage from "./Soup/SopuCover/SoupImage";
import Soup from "./Soup/Soup";

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

            {/* =========== Soup Section========= */}
            <div className="">
                <SoupImage></SoupImage>
                <Soup></Soup>
            </div>
        </div>
    );
};

export default Menu;