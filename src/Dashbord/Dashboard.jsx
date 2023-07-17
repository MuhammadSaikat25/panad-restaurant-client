import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button  lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li><NavLink to={'/'}>Admin Home</NavLink></li>
          <li><NavLink to={'/dashboard/AddItem'}>Add item</NavLink></li>
          <li><NavLink to={'/dashboard/manageItem'}>Manage item</NavLink></li>
          <li><NavLink to={'/dashboard/allUser'}>All User</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'text-orange-600' : ''} to={'/menu'}>Menu</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'text-orange-600' : ''} to={'/shop'}>Shop</NavLink></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;