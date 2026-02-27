import { useState } from 'react'
import UserContext from './UserContext'
import axios from 'axios'
import { useEffect } from 'react'


const UserContextProvider = ({ children }) => {

  const [sidebaropen, setsidebaropen] = useState(false)
  const [product, setproduct] = useState([])
  const [addcart, setaddcart] = useState([])

  //product add
  const [Title, setTitle] = useState("")
  const [Desc, setDesc] = useState("")
  const [Category, setCategory] = useState("")
  const [Price, setPrice] = useState("")
  const [Url, setUrl] = useState("")

  const [MyProduct, setMyProduct] = useState(()=>{

    const storedProducts=localStorage.getItem("products");
    return storedProducts ?JSON.parse(storedProducts) :[];

  })

  useEffect(()=>{
    localStorage.setItem("products",JSON.stringify(MyProduct))
  },[MyProduct]);

  const fetchdata = async () => {
    const response = await axios.get('https://fakestoreapi.com/products/')
    setproduct(response.data);
  }

  useEffect(() => {

    fetchdata();
    
  }, [])

  return (
    <UserContext.Provider value={{sidebaropen,setsidebaropen,product,addcart,setaddcart,MyProduct,setMyProduct,Title,Desc,Category,Price,Url,setTitle,setDesc,setCategory,setPrice,setUrl}} >
      {children}
    </UserContext.Provider>
  )
}


export default UserContextProvider
