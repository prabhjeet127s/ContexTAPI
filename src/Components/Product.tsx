import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

const Product = () => {


  const navigate = useNavigate()
  const { product, addcart, setaddcart } = useContext(UserContext);


  const handleonclick = (item) => {
    if (addcart.some((value) => value.id == item.id)) {
      toast.error("Item already in cart ❌");

    } else {
      setaddcart([...addcart, item])
      toast.success("Added to Cart")

    }
  }
  return (
    <>

      <div className="grid md:grid-cols-3  sm:grid-cols-1 gap-6 p-6">
        {product.map((item) => (
          <div key={item.id} className='bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition duration-300' >
            <div className=" position relative overflow-y-auto h-60 overflow-x-hidden ">
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
            </div>
            <div>
              <button
                onClick={() => handleonclick(item)}
                className='position stick bottom-0 mt-4  w-3/4 bg-black ml-10 text-white text-center py-2  rounded-xl hover:bg-gray-800 ' >
                Add to Cart
              </button>
              <div><Toaster
                position="top-center"
                reverseOrder={true} /></div>

            </div>


          </div>
        ))}
      </div>


    </>
  )
}

export default Product
