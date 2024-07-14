import React from 'react'
import './Tranding.css'

const Tranding = ({imageSrc,playImgsrc,timeSrc,time,starSrc,star,title,btn1,btn2,btn3}) => {
  return (
    <div className='trandings-info'>
      <div >
        <img style={{width:"320px",height:"280px"}} src={imageSrc} alt="" />
       <button className='play-button'><img src={playImgsrc} alt="" /></button> 
      <div className='time-star'>
      <p><img src={timeSrc} alt="" />{time}</p>
      <p><img src={starSrc} alt="" />{star}</p>
      </div>
      </div>
      <div style={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
        <h3>{title}</h3>
        <div className='cont-button'>
          {btn1 && <button>{btn1}</button>}
          {btn2 && <button>{btn2}</button>}
          {btn3 && <button>{btn3}</button>}
        </div>
        </div>
    </div>
  )
}

export default Tranding
