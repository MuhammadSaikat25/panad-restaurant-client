import { FaGoogle } from 'react-icons/fa';
import './singUp.css'
import logInImg from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Firebase/AuthProvider';
import axios from 'axios';

const SingUP = () => {
    const { createUser, upDateUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const handelSingUp = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        createUser(email, password)
            .then(res => {
                console.log(res.user)
                setError('')
                //====== update user
                upDateUser(name)
                    .then(res => {
                        const userData = {
                            name, email
                        }
                        // ======= post user data in mongodb
                        axios.post(`${import.meta.env.VITE_SERVER}/postUser`, userData)
                            .then(res => {
                                navigate('/')
                            })
                    })
                    .catch(error => { })
            })
            .catch(error => {
                setError(error.message)
                console.log(error.message)
            })
    }

    return (
        <div className="logIn-bg w-screen h-screen flex items-center">
            <div className="border lg:flex flex-row-reverse justify-around w-[70%] mx-auto items-center gap-5 h-fit p-10 shadow-xl shadow-black ">
                <div className="">
                    <img className='w-[500px]' src={logInImg} alt="" />
                </div>
                <div className="">
                    <form onSubmit={handelSingUp} className='space-y-5'>
                        <h1 className=' mt-2 text-center font-semibold line-through	lg:text-2xl'>log In</h1>
                        <input className='w-full p-1' type="text" name="name" id='Email' placeholder='Name' required />
                        <input className='w-full p-1' type="email" name="email" id='Email' placeholder='Email' required />
                        <input className='w-full p-1' type="password" name="password" placeholder='Password' id='Password' required />
                        <button className='w-full p-1 bg-[#D1A054] text-white'>Sing Up</button>
                        <h1>{error}</h1>
                        <Link className='text-center flex justify-center text-[#D1A054]' to={'/logIn'}>Already registered? Go to log in</Link>
                        <h1 className='text-center'>Or sign in with</h1>
                        <h1><FaGoogle className=' mx-auto cursor-pointer' size={20} color='blue'></FaGoogle></h1>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingUP;