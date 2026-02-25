import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoReorderThreeOutline } from "react-icons/io5";
import Sidebar from './Sidebar';
import UserContext from '../Context/UserContext';




const Header = () => {





    const navigate = useNavigate();
    return (

        <header className="w-full bg-gray-600 text-white shadow-md">
            <div   className=" hidden md:flex transition-all duration-75  max-w-7xl mx-auto  justify-center">
                <nav className="flex gap-16 py-4">

                    <button
                        onClick={() => navigate('/')}
                        className="hover:text-blue-400 transition duration-300">
                        Home
                    </button>

                    <button
                        onClick={() => navigate('/Product-list')}
                        className="hover:text-blue-400 transition duration-300">
                        Product
                    </button>

                    <button
                        onClick={() => navigate('/contact')}
                        className="hover:text-blue-400 transition duration-300">
                        Contact
                    </button>
                </nav>
            </div>
        </header>
        
        


    )
}

export default Header
