import './logIn.css'
import logInImg from '../../assets/others/authentication2.png'
import { FaGoogle } from 'react-icons/fa';


const LogIn = () => {

    return (
        <div className="logIn-bg w-screen h-screen flex items-center">
            <div className="border lg:flex justify-around w-[70%] mx-auto items-center gap-5 h-fit p-10 shadow-xl shadow-black ">
                <div className="">
                    <img className='w-[500px]' src={logInImg} alt="" />
                </div>
                <div className="">
                    <form className='space-y-5'>
                        <h1 className=' mt-2 text-center font-semibold line-through	lg:text-2xl'>log In</h1>
                        <input className='w-full p-1' type="email" name="email" id='Email' placeholder='Email' />
                        <input className='w-full p-1' type="password" name="password" placeholder='Password' id='Password' />
                        <button className='w-full p-1 bg-[#D1A054] text-white'>Sing In</button>
                        <h1 className='text-center text-[#D1A054]'>New here? Create a New Account</h1>
                        <h1 className='text-center'>Or sign in with</h1>
                        <h1><FaGoogle className=' mx-auto cursor-pointer' size={20} color='blue'></FaGoogle></h1>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
