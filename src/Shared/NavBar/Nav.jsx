import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div className="navbar fixed top-0 z-50 bg-slate-600  bg-opacity-30 text-white  flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-3">
                            <li><NavLink>Home</NavLink></li>
                            <li><NavLink>Contact Us</NavLink></li>
                            <li><NavLink>Menu</NavLink></li>
                            <li><NavLink>Shop</NavLink></li>
                            <li><NavLink>0</NavLink></li>
                            <li><NavLink>Profile</NavLink></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">PANDA</a>
                </div>
                <div className="navbar-center hidden lg:flex mr-9">
                    <div className=" flex gap-4">
                        <NavLink>Home</NavLink>
                        <NavLink>Contact Us</NavLink>
                        <NavLink to={'/menu'}>Menu</NavLink>
                        <NavLink>Shop</NavLink>
                        <NavLink>0</NavLink>
                        <NavLink>Profile</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;