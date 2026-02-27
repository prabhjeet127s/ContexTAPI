
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Product from './Components/Product'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import UserContextProvider from './Context/UserContextProvider'
import AddToCart from './Components/AddToCart'
import AddProduct from './Components/AddProduct'
import MyProduct from './Components/MyProduct'


function App() {


  return (
    <>
    <UserContextProvider>
      <Header/>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Product-list' element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/add-to-cart' element={<AddToCart/>}/>
        <Route path='/addproduct' element={<AddProduct/>} />
        <Route path='/myproduct' element={<MyProduct/>} />

      </Routes>
    </UserContextProvider>
    </>
  )
}

export default App
