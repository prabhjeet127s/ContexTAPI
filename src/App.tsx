import { useState } from 'react'



import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Product from './Components/Product'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import UserContextProvider from './Context/UserContextProvider'


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
      </Routes>
    </UserContextProvider>
      

  
    </>
  )
}

export default App
