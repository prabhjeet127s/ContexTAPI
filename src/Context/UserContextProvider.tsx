import { useState } from 'react'
import UserContext from './UserContext'
import axios from 'axios'
import { useEffect } from 'react'

const UserContextProvider = ({ children }) => {

  const [sidebaropen, setsidebaropen] = useState(false)
  const [product, setproduct] = useState([])
  const [addcart, setaddcart] = useState([])


  const fetchdata = async () => {
    const response = await axios.get('https://fakestoreapi.com/products/')
    setproduct(response.data);
  }

  useEffect(() => {

    fetchdata();
    
  }, [])

  return (
    <UserContext.Provider value={{sidebaropen,setsidebaropen,product,addcart,setaddcart}} >
      {children}
    </UserContext.Provider>
  )
}


export default UserContextProvider
