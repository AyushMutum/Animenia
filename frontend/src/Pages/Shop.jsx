import React, { useState } from 'react'
import AnimeDisplay from '../Components/AnimeDisplay/AnimeDisplay'
import Hero from '../Components/Hero/Hero'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Offers from '../Components/Offers/Offers'
import Polupar from '../Components/Popular/Polupar'

const Shop = () => {

  const [category, setCategory] = useState("All")

  return (
    <div>
    
        <Hero category={category} setCategory={setCategory} />
        <AnimeDisplay category={category} setCategory={setCategory} />
        {/* <Polupar /> */}
        <Offers />
        <NewCollections />
        <NewsLetter />
    </div>
  )
}

export default Shop