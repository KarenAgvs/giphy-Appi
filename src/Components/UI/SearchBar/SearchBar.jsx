import React from 'react'
import './SearchBar.css'
export const SearchBar =({e})=>{
  return (
    <>
    <form className='form'>
      <input className="input-search" type='text' onChange={e}   placeholder='Search...'></input>
    </form>
    </>
    
  )
}
