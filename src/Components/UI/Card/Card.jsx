import React from 'react'
import './Card.css'
import imagen from '../../../images/imagen.jpg'

export const Card = () => {
  return (
    <div className='card-element'>
        <img src={imagen} alt='imagen' className='imagen'/>
        <div>
            <p className='character-name'>Ejemplo</p>
        </div>
    </div>
  )
}
