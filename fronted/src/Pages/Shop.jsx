import React from 'react'
import Hero from '../Components/Hero/Hero' 
import Populer from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetters from '../Components/NewsLetters/NewsLetters'

const Shop = () =>{
    return (
        <div>
           <Hero/>
           <Populer/>
           <Offers/>
           <NewCollections/>
           <NewsLetters/>
        </div>
    )
}
export default Shop