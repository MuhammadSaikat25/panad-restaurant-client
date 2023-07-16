import { FiFacebook } from 'react-icons/fi';
import { FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';


const Footer = () => {
    return (
        <footer className='mt-20 lg:mt-[130px]'>
            <div className="flex text-white">
                <div className="text-center bg-[#1F2937] w-[960px] h-[200px]">
                    <h1 className='mt-10 lg:mt-10'>Contact us</h1>
                    <p className="">123 ABS Street, Uni 21, Bangladesh <br />
                        +88 123456789 <br />
                        Mon - Fri: 08:00 - 22:00 <br />
                        Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className="bg-[#111827] text-centers w-[960px] h-[200px] py-3">
                    <h1 className='text-center mt-10'>Follow US</h1>
                    <h1 className='text-center'>Join us on social media</h1>
                    <div className="flex justify-center items-center gap-3 h-[70px]">
                        <FiFacebook color='white' size={30}></FiFacebook>
                        <FaTwitter color='white' size={30}></FaTwitter>
                        <BsInstagram color='white' size={30}></BsInstagram>
                    </div>
                </div>
            </div>
            <h1 className="bg-black text-white text-center p-2">Copyright © CulinaryCloud. All rights reserved.</h1>
        </footer>
    );
};

export default Footer;