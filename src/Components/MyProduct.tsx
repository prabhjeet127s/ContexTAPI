import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const MyProduct = () => {

    const { MyProduct } = useContext(UserContext)

    console.log(MyProduct)



    return (
        <>{MyProduct.length > 0 ? (<div className="grid md:grid-cols-3  sm:grid-cols-1 gap-6 p-6">

            {MyProduct.map((item) => (
                <div key={item.id} className='bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition duration-300' >
                    <div className='position relative' >
                        <div className="  overflow-y-auto h-60 ">
                            <h2
                                className="text-lg font-bold mb-2">
                                {item.title}
                            </h2>
                            <img  className='rounded-2xl h-28 ' src={item.url} alt="" />

                            <p
                                className="text-gray-600 text-sm mb-2 ">
                                {item.description}
                            </p>
                            <p className=" font-semibold text-lg">
                                ₹ {item.price}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>) : (<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

            <h1 className="text-4xl font-semibold text-gray-800">
                Missing cart items?
            </h1>
            

        </div>)}

        </>
    )
}

export default MyProduct
