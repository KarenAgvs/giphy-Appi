import React from 'react'
import './Card.css'

export const Card = ({element}) => {
  return (
    <>
    {
      element.map(item=>(
      <div className='card-element'>
          <img src={item.images.original.url} alt={item.title} className='imagen'/>
          <div>
              <p className='character-name'>{item.title}</p>
          </div>
      </div>
      ))
    }
    </>
  )
}
