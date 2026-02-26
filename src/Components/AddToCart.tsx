import { useContext } from 'react'
import UserContext from '../Context/UserContext'
import { FaBasketShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { RxCross2 } from "react-icons/rx";


const AddToCart = () => {
    const navigate = useNavigate();


    const { addcart, setaddcart } = useContext(UserContext)

    const handleonclick = (id) => {
        if (addcart.some((item) => item.id == id)) {
            setaddcart(addcart.filter((item) => item.id != id))
        }
        toast.success("Item Removed")

    }
    return (
        <>{addcart.length > 0 ? (<div className="grid md:grid-cols-3  sm:grid-cols-1 gap-6 p-6">

            {addcart.map((item) => (
                <div key={item.id} className='bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition duration-300' >
                    <div className='position relative' >
                        <div className="  overflow-y-auto h-60 ">
                            <h2
                                className="text-lg font-bold mb-2">
                                {item.title}
                            </h2>
                            <p
                                className="text-gray-600 text-sm mb-2 ">
                                {item.description}
                            </p>
                            <p className=" font-semibold text-lg">
                                ₹ {item.price}
                            </p>

                            <div>
                                <button
                                    onClick={() => handleonclick(item.id)}
                                    className='position absolute -top-4 left-100
                                               rounded-full w-9 h-9 
                                               flex justify-center items-center 
                                              bg-red-700 ml-10 text-white text-center py-2 
                                              hover:bg-gray-800 ' >
                                    <RxCross2 />

                                    <div>
                                        <Toaster
                                            position="top-center"
                                            reverseOrder={true} />
                                    </div>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>) : (<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

            <div className='' >
                <FaBasketShopping size={200} className='text-gray-300' />

            </div>
            <h1 className="text-4xl font-semibold text-gray-800">
                Missing cart items?
            </h1>
            <button onClick={() => navigate('/Product-list')} className='text-blue-600 p-2 ' >Continue Shopping</button>

        </div>)}

        </>


    )
}

export default AddToCart
