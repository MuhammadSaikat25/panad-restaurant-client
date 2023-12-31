import './logIn.css'
import logInImg from '../../assets/others/authentication2.png'
import { FaGoogle } from 'react-icons/fa';
import {  NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Firebase/AuthProvider';


const LogIn = () => {
    const {logIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const [error,setError]=useState('')
    const handelLogIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        logIn(email,password)
            .then(res=>{
                    navigate('/')
                    setError('')
            })
            .catch(error=>{
                setError(error.message)
            })
       
    }

    return (
        <div className="logIn-bg w-screen h-screen flex items-center">
            <div className="border lg:flex justify-around w-[70%] mx-auto items-center gap-5 h-fit p-10 shadow-xl shadow-black ">
                <div className="">
                    <img className='w-[500px]' src={logInImg} alt="" />
                </div>
                <div className="">
                    <form onSubmit={handelLogIn} className='space-y-5'>
                        <h1 className=' mt-2 text-center font-semibold line-through	lg:text-2xl'>log In</h1>
                        <input className='w-full p-1' type="email" name="email" id='Email' placeholder='Email' required />
                        <input className='w-full p-1' type="password" name="password" placeholder='Password' id='Password' required />
                        <button className='w-full p-1 bg-[#D1A054] text-white'>Sing In</button>
                        <h1>{error}</h1>
                        <NavLink className=' flex justify-center text-center text-[#D1A054]  ' to={'/singUp'}>New here? Create a New Account</NavLink>
                        <h1 className='text-center'>Or sign in with</h1>
                        <h1><FaGoogle className=' mx-auto cursor-pointer' size={20} color='blue'></FaGoogle></h1>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
