import { NavLink, Outlet } from "react-router-dom";
import GetAllUser from "../Utils/GetAllUser";
import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";

const Dashboard = () => {
  const [data] = GetAllUser()
  const { user } = useContext(AuthContext)
  const logIngUser = data?.find(data => data.email === user.email)

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button  lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        {
          logIngUser?.role === 'admin' ?
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
             
              <li><NavLink to={'/'}>Admin Home</NavLink></li>
              <li><NavLink to={'/dashboard/AddItem'}>Add item</NavLink></li>
              <li><NavLink to={'/dashboard/manageItem'}>Manage item</NavLink></li>
              <li><NavLink to={'/dashboard/allUser'}>All User</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? 'text-orange-600' : ''} to={'/menu'}>Menu</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? 'text-orange-600' : ''} to={'/shop'}>Shop</NavLink></li>
            </ul>
            :
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
             
              <li><NavLink to={'/'}>Home</NavLink></li>
              <li><NavLink to={'/dashboard/myBooking'}>My Booking</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? 'text-orange-600' : ''} to={'/menu'}>Menu</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? 'text-orange-600' : ''} to={'/shop'}>Shop</NavLink></li>
            </ul>

        }


      </div>
    </div>
  );
};

export default Dashboard;