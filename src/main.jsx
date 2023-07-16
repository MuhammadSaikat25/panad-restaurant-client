import ReactDOM from 'react-dom/client'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Pages/Main';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import Shop from './Pages/Shop/Shop';
import AuthProvider from './Firebase/AuthProvider';
import LogIn from './Shared/LogIn/LogIn';
import SingUP from './Shared/SingUp/SingUP';
import PrivateRoute from './Firebase/PrivateRoute';
import Dashboard from './Dashbord/Dashboard';
import MyBooking from './Pages/MyBooking/MyBooking';
import DashboardProfile from './Dashbord/DashboardProfile';
import AddItem from './Dashbord/Admin/AddItem';
import ManageItem from './Dashbord/Admin/ManageItem';
import AllUser from './Dashbord/Admin/Alluser/AllUser';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "menu",
        element: <Menu></Menu>
      },
      {
        path: "shop",
        element: <PrivateRoute><Shop></Shop></PrivateRoute>
      },
      {
        path:"myBooking",
        element:<MyBooking></MyBooking>
      }
    ]
  },
  {
    path:"/login",
    element:<LogIn></LogIn>
  },
  {
    path:"/singUp",
    element:<SingUP></SingUP>
  },
  {
    path:"Dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'DashProfile',
        element:<DashboardProfile></DashboardProfile>
      },
      {
        path:'addItem',
        element:<AddItem></AddItem>
      },
      {
        path:'manageItem',
        element:<ManageItem></ManageItem>
      },
      {
        path:'allUser',
        element:<AllUser></AllUser>
      }
    ]
  }
  
]);
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>
  //</React.StrictMode>,
)
