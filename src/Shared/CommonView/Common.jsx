
const Common = ({ data }) => {
    const { name, image, price, recipe } = data
    return (
        <div className="lg:flex items-center lg:gap-5 border p-3 ">
            <img style={{ borderRadius: '0px 200px 200px 200px' }} className="w-[118px] h-[108px]" src={image} alt="" />
            <div className="">
                <h1>{name} ------------------</h1>
                <h1>{recipe}</h1>
            </div>
            <h1 className="text-yellow-600">${price}</h1>
        </div>
    );
};

export default Common;