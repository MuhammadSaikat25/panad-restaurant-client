import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Firebase/AuthProvider';
const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER}`
})
const AxiosSecure = () => {

    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
   

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('jwt-token')
            if (token) {
                config.headers.Authorization = `bearer ${localStorage.getItem('jwt-token')}`
            }
            return config
        })
        axiosSecure.interceptors.response.use((response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOut()
                    navigate('/login')
                }
            }
        )
    }, [logOut,navigate])
    return axiosSecure
};

export default AxiosSecure;