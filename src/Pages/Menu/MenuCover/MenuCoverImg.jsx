import './menu.css'
const MenuCoverImg = () => {
    return (
        <div className="bg-img bg-fixed h-[250px] lg:h-[700px] relative w-full text-center">
            <div className=" bg-black rounded absolute h-[70px] top-20 left-24 bg-opacity-30 text-white lg:h-[300px] lg:w-[800px] lg:top-[200px] lg:left-[400px] ">
                <div className="p-2 lg:p-20 space-y-3">
                    <h1 className='lg:font-semibold lg:text-4xl'>OUR MENU</h1>
                    <p className='lg:text-2xl'>Would you like to try a dish?</p>
                </div>
            </div>
        </div>
    );
};

export default MenuCoverImg;