import React from 'react'

export default function Card({title,image}) {
  return (
    <div className='backdrop-blur shadow-orange-500 shadow-lg
    '>

      <img src={image} alt="" />
        
    {title}

    </div>
  )
}
