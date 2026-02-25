import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Product = () => {

  const product = useContext(UserContext);

  



  return (
    <>
      <div className="grid grid-cols-3  gap-6 p-6">
        {product.product.map((item) => (
          <div key={item.id}
           className="bg-white relative  min-h-70 shadow-md rounded-xl p-4 hover:shadow-xl transition duration-300" >
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
          <button
            className=" position absolute bottom-5 left-0 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
        ))}


      </div>


    </>
  )
}

export default Product
