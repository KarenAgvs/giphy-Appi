import './Main.css'
import React, { useState } from 'react'
import axios from 'axios'
import { Card } from '../../UI/Card/Card'
import { SearchBar } from '../../UI/SearchBar/SearchBar'


export const Main = () => {

     const [giphy, setGiphy]=useState([])

    const Getdata=(e)=>{
        const URL=`https://api.giphy.com/v1/gifs/search?api_key=ItVZN7u2LLdE1PrmPQBIGIB73pJS42xZ&q=${e.target.value}&limit=16`
         axios.get(URL)
        .then(res=>{
             setGiphy(res.data.data)
            console.log(giphy)
         }).catch(err=>{
            console.log(err)
         })
     }

  return (
      <>
      <SearchBar e={Getdata}/>
      <div className='card-content'>
        <Card  element={giphy} key='Card'/>
      </div>
      </>
  )
}
