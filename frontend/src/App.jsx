import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart.jsx'
import Home from './pages/Home/Home.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopup/LoginPopUp'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {
  const [showLogin, setShowLogin]=useState(false)
  return (
<>
{showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
<div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>

      </Routes>
     
    </div>
    <Footer/>
</>
  )
}

export default App
