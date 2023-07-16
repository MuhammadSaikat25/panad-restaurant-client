import axios from "axios";
import { useEffect, useState } from "react";
import User from "./User";

const AllUser = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER}/getAllUser`)
            .then(data => setUser(data.data))
    }, [])
    return (
        <div>
            {
                <div className='mt-10'>

                    <table className=' lg:w-[800px] lg:h-[200px] mt-10 mx-auto '>
                        <tr className='text-left bg-slate-600 text-yellow-50'>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                        {user.map((item, i) => {
                            return (
                                <tr className='border-t-2 border-gray-950 ' key={i}>
                                    <td>{i + 1}</td>
                                    <td>{item.name}</td>
                                    <td >{item.email}</td>
                                    <td onClick={() => updateRole(item)}>{item.role === 'admin' ? "admin" : <button>user</button>}</td>
                                    <td>
                                        <button onClick={() => deleteUser(item._id)} className='bg-orange-500 p-1 text-white rounded'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            }
        </div>
    );
};

export default AllUser;