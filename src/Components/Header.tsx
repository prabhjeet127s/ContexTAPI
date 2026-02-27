import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import UserContext from '../Context/UserContext';
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Header = () => {
    const location = useLocation();
    console.log(location.pathname);

    const { addcart } = useContext(UserContext);


    const navigate = useNavigate();
    return (
        <header className="w-full bg-gray-600 text-white shadow-md">
            <div className=" hidden md:flex transition-all duration-75  max-w-7xl mx-auto  justify-between">
                <nav className="flex gap-16 px-2 py-4">

                    <button
                        onClick={() => navigate('/')}
                        className="hover:text-blue-400 hover:underline  transition duration-300">
                        Home
                    </button>

                    <button
                        onClick={() => navigate('/Product-list')}
                        className="hover:text-blue-400 hover:underline  transition duration-300">
                        Product
                    </button>

                    <button
                        onClick={() => navigate('/contact')}
                        className="hover:text-blue-400 hover:underline transition duration-300">
                        Contact
                    </button>
                    <button className='hover:underline' >
                        <Link to={'/myproduct'} >My Product</Link>
                    </button>

                    {location.pathname === '/Product-list' && 
                    <button className='hover:underline' >
                        <Link to={'/addproduct'} >Add Product</Link>
                    </button>}
                </nav>
                <div className='py-4 flex  '  >
                    <CiShoppingCart onClick={() => navigate('/add-to-cart')}
                        className=' position relative  text-right size-11  hover:shadow-2xl   p-1 transition duration-1000   font-bold ' />
                    <span className=' top-4.5 right-30.5 position border w-5 h-5 flex justify-center items-center  rounded-full bg-amber-400 absolute  font-semibold  ' >{addcart.length}</span>


                </div>
            </div>

        </header>

    )
}

export default Header
