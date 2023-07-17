import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


const AddFood = ({ data }) => {
    const { user } = useContext(AuthContext)
    const orderData = (data) => {
        const bookingData = {
            name: data.name,
            price: data.price,
            image: data.image,
            userName: user?.displayName,
            email: user?.email
        }

        //  post order in mongodb
        axios.post(`${import.meta.env.VITE_SERVER}/postOrder`, bookingData)
            .then(res => {
                toast("Wow so easy!");
            })
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="shadow-lg relative lg:w-[350px] text-center" key={data._id}>
                <img className="mx-auto" src={data.image} alt="" />
                <div className="bg-[#F3F3F3] p-2">
                    <h1 className="absolute top-5 right-5 bg-blue-400 text-white rounded p-1">${data.price}</h1>
                    <h1 className="font-bold">{data.name}</h1>
                    <h1 className="text-xs">{data.recipe}</h1>
                    <button onClick={() => orderData(data)} className="text-orange-500 bg-[#E8E8E8] p-1 border-b-2 border-orange-400 rounded mt font-semibold mt-2 hover:bg-black">Add to Chart</button>
                </div>
            </div>
        </div>
    );
};

export default AddFood;