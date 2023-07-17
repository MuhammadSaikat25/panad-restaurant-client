
const SingleManageItem = ({ food }) => {
    const { name, price, recipe, image } = food
    return (
        <div>

            <div className="shadow-lg relative lg:w-[350px] text-center">
                <img className="mx-auto" src={food.image} alt="" />
                <div className="bg-[#F3F3F3] p-2">
                    <h1 className="absolute top-5 right-5 bg-blue-400 text-white rounded p-1">${food.price}</h1>
                    <h1 className="font-bold">{food.name}</h1>
                    <h1 className="text-xs">{food.recipe}</h1>
                    <div className="flex justify-between">
                        <button className="bg-rose-400 text-white p-1 rounded-md">Delete</button>
                        <button className="bg-rose-400 text-white p-1 rounded-md">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleManageItem;