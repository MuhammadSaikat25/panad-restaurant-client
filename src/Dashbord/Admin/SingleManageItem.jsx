import AxiosSecure from "../../Utils/AxiosSecure";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleManageItem = ({ food }) => {
    const { name, price, recipe, image, _id } = food
    const axiosSecure = AxiosSecure()

    const deleteFood = (_id) => {
        axiosSecure.delete(`${import.meta.env.VITE_SERVER}/deleteFood/${_id}`)
            .then(res => {
                toast('Delete Successful')
            })
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="shadow-lg relative lg:w-[350px] text-center">
                <img className="mx-auto" src={food.image} alt="" />
                <div className="bg-[#F3F3F3] p-2">
                    <h1 className="absolute top-5 right-5 bg-blue-400 text-white rounded p-1">${food.price}</h1>
                    <h1 className="font-bold">{food.name}</h1>
                    <h1 className="text-xs">{food.recipe}</h1>
                    <button onClick={() => deleteFood(_id)} className="bg-rose-400 w-full mt-2 text-white p-1 hover:bg-orange-500 rounded-md">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleManageItem;