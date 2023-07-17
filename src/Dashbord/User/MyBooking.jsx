import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import AxiosSecure from "../../Utils/AxiosSecure";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyBooking = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = AxiosSecure()
    const [order, setOrder] = useState([])

    useEffect(() => {
        axiosSecure.get(`${import.meta.env.VITE_SERVER}/getSingleUserOrder/${user?.email}`)
            .then(res => setOrder(res.data))
    }, [user?.email, axiosSecure])

    const orderDelete=(order)=>{
        console.log(order._id)
        axiosSecure.delete(`${import.meta.env.VITE_SERVER}/deleteOrder/${order._id}`)
            .then(res=>{
                console.log(res.data)
                toast('Deleting Order successfully')

            })
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            {
                order ?
                    <div className='mt-10'>

                        <table className=' lg:w-[800px] lg:h-[200px] mt-10 mx-auto '>
                            <tr className='text-left bg-slate-600 text-yellow-50'>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Delete</th>
                            </tr>
                            {order?.map((order, i) => {
                                return (
                                    <tr className='border-t-2 border-gray-950 ' key={i}>
                                        <td>{i + 1}</td>
                                        <td><img className="w[30px] h-[30px] lg:h-[70px] lg:w-[70px] shadow-lg shadow-black rounded-full" src={order?.image} alt="" /></td>
                                        <td>{order.name}</td>
                                        <td >{order.email}</td>
                                        <td>
                                            <button onClick={()=>orderDelete(order)} className='bg-orange-500 p-1 text-white rounded'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                    : <h1>loading...</h1>
            }
        </div>
    );
};

export default MyBooking;