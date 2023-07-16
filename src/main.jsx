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
