import GetAllUser from "../../../Utils/GetAllUser";
import AxiosSecure from "../../../Utils/AxiosSecure";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllUser = () => {
    const [data, refetch] = GetAllUser()
    const axiosSecure = AxiosSecure()

    const updateRole = (user) => {
        axiosSecure.patch(`${import.meta.env.VITE_SERVER}/makeAdmin/${user?.email}`)
            .then(data => {
                refetch
                toast('Make Admin successfully')
               
            })
    }

    const deleteUser=(user)=>{
        console.log(user?._id)
        axiosSecure.delete(`${import.meta.env.VITE_SERVER}/deleteUser/${user?._id}`)
                .then(res=>{
                   
                    toast('Deleting user successfully')
                })
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            {
                data ? <div className='mt-10'>

                    <table className=' lg:w-[800px] lg:h-[200px] mt-10 mx-auto '>
                        <tr className='text-left bg-slate-600 text-yellow-50'>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                        {data?.map((user, i) => {
                            return (
                                <tr className='border-t-2 border-gray-950 ' key={i}>
                                    <td>{i + 1}</td>
                                    <td>{user.name}</td>
                                    <td >{user.email}</td>
                                    <td onClick={() => updateRole(user)}>{user.role === 'admin' ? "admin" : <button>user</button>}</td>
                                    <td>
                                        <button onClick={()=>deleteUser(user)} className='bg-orange-500 p-1 text-white rounded'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>

                    : <h1 className="text-xl text-blue-400">loading.....</h1>
            }
        </div>
    );
};

export default AllUser;