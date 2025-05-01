import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
const Home = () => {
  const [resturant, setResturant]=useState("All");

  return (
    <div dir='rtl'>
      <Header/>
      <ExploreMenu resturant={resturant} setResturant={setResturant} />
      <FoodDisplay resturant={resturant}/>
      <AppDownload/>

    </div>
  )
}

export default Home
