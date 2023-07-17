import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";


const Nav = () => {
    const { user, logOut } = useContext(AuthContext)

    return (
        <nav>
            <div className="navbar fixed top-0 z-50 bg-slate-600  bg-opacity-30 text-white  flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-3">
                            <li><NavLink className={({ isActive }) => isActive ? 'text-orange-600' : ''} to={'/'}>Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-orange-600' : ''} to={'/menu'}>Menu</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-orange-600' : ''} to={'/shop'}>Shop</NavLink></li>
                            {
                                user && <li><NavLink className={({ isActive }) => isActive ? 'text-orange-600 relative' : ''} to={'/Dashboard'}>Dashboard</NavLink></li>
                            }
                            {
                                user ? <>
                                    <li><NavLink onClick={() => logOut()}>log Out</NavLink></li>
                                    <li><NavLink className={({ isActive }) => isActive ? 'text-yellow-300' : ''} to={"/singUp"}>Sing Up</NavLink></li>
                                </>
                                    :
                                    <>
                                        <li><NavLink className={({ isActive }) => isActive ? 'text-yellow-300' : ''} to={'/login'}>log In</NavLink></li>
                                        <li><NavLink className={({ isActive }) => isActive ? 'text-yellow-300' : ''} to={"/singUp"}>Sing Up</NavLink></li>
                                    </>
                            }

                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">PANDA</Link>
                </div>


                <div className="navbar-center hidden lg:flex mr-9">
                    <div className=" flex gap-4">
                        <NavLink className={({ isActive }) => isActive ? 'text-yellow-300' : ''} to={'/'}>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-yellow-300' : ''} to={'/menu'}>Menu</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-yellow-300' : ''} to={'/shop'}>Shop</NavLink>
                        {
                            user && <NavLink className={({ isActive }) => isActive ? 'text-yellow-300' : ''} to={'/Dashboard'}>Dashboard</NavLink>
                        }
                        {
                            user ?
                                <>
                                    <NavLink onClick={() => logOut()} >log Out</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? 'text-yellow-300' : ''} to={"/singUp"}>Sing Up</NavLink>
                                </>
                                :
                                <>
                                    <NavLink onClick={() => logOut()} className={({ isActive }) => isActive ? 'text-yellow-300' : ''} to={'/login'}>log In</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? 'text-yellow-300' : ''} to={"/singUp"}>Sing Up</NavLink>
                                </>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;

