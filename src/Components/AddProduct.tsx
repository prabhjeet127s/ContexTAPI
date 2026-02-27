import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'react-hot-toast'

const AddProduct = () => {
    const navigate = useNavigate()
    const { Title, Price, Desc, Url, Category, setDesc, setPrice, setTitle, setUrl, setCategory, setMyProduct, MyProduct } = useContext<any>(UserContext)
    const handlefile = (e) => {

        const file = e.target.files[0]
        if (file) {
            setUrl(URL.createObjectURL(file))
        }
    }
    const handleformsubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Product Added ")
        const data = {
            id:MyProduct.length+1,
            category: Category,
            description: Desc,
            price: Price,
            title: Title,
            url: Url
        };
        setMyProduct((prev) => {
            const updated = [...prev, data];
            console.log("Updated State:", updated);
            return updated;
        });
        navigate('/Product-list')
        
    };
    return (
        <div className='h-screen flex justify-center '>
            <div className='bg-white shadow-2xl h-[85%] mt-2 w-6xl ' >
                <form onSubmit={handleformsubmit} className='p-3' action="">
                    <h3 className='text-2xl font-semibold p-2 ' >Add Product</h3>
                    <section>
                        <h3 className=' ml-6' >Product Details</h3>
                        <div className='border-gray-200  overflow-y-auto h-110 border-2 m-3 mx-10 '>
                            <div className='grid grid-cols-3  p-1 m-4 '  >
                                <div className='flex flex-col gap-4'>
                                    <label className='font-semibold' htmlFor="">Product Title</label>
                                    <input onChange={(e) => setTitle(e.target.value)}
                                        type="text"
                                        placeholder='Title...'
                                        className='border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition w-77 p-3 rounded-xl' />
                                </div>
                                <div className='flex flex-col gap-4'  >
                                    <label className='font-semibold' htmlFor="">Product Category</label>
                                    <input
                                        onChange={(e) => setCategory(e.target.value)}
                                        placeholder='Category...'
                                        type="text"
                                        className='border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition w-77 p-3 rounded-xl' />
                                </div>

                                <div className='flex flex-col gap-4'  >
                                    <label className='font-semibold' htmlFor="">Price</label>
                                    <input
                                        onChange={(e) => setPrice(e.target.value)}
                                        placeholder='INR'
                                        type="text"
                                        className='border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition w-77 p-3 rounded-xl' />
                                </div>

                            </div>
                            <div className='flex flex-wrap  gap-10 p-1 m-4 '>
                                <div className='flex flex-col gap-4' >
                                    <label className='font-semibold' htmlFor="">Description</label>
                                    <textarea
                                        onChange={(e) => setDesc(e.target.value)}
                                        id="description" name="description"
                                        className='h-52 w-120 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition  p-3 rounded-xl'
                                        placeholder="Write your description here..." required></textarea>
                                </div>

                                <div className='flex flex-col gap-4'  >
                                    <label className='font-semibold' htmlFor="">Upload Image</label>
                                    <input onChange={(e) => handlefile(e)} type="file"
                                        className='border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition w-77 p-3 rounded-xl' />
                                </div>

                            </div>
                        </div>
                        <button className='border-2 m-2 ml-5 bg-red-700 text-white hover:bg-red-500 font-bold rounded-xl p-2 px-8'  >Submit</button>
                        <Toaster
                            position="top-center"
                            reverseOrder={true} />
                    </section>


                </form>

            </div>
        </div>
    )
}

export default AddProduct
