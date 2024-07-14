import React from 'react'
import './Recent.css'

const Recent = ({imgsrc,title,episode,date}) => {
  return (
    <div className='recent-containner'>
      <div>
        <img src={imgsrc} alt={title} />
      </div>
      <div className='descript'>
        <p>{title}</p>
        <p>{episode}</p>
        <p>{date}</p>
      </div>
    </div>
  )
}

export default Recent
