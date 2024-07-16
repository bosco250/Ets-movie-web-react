import './NewReleased.css'
function NewReleased({profSrc,title,timeSrc,btn1,btn2,ep}){
  return<div className='new-released'>
    <div style={{position:"relative"}} className='profile'>
      <img style={{width:"260px",height:"330px"}} src={profSrc} alt="" />
      {ep&&(<p style={{
        position:"absolute",
        background:"red",
        color:"white",
        top:"10px",
        left:"10px",
        borderRadius:"5px",
        fontWeight:"500",
        padding:"5px"
      }}>{ep}</p>)}
    </div>
    <div className='new-descript'>
      <p>{title}</p>
      <div>
      <button className='hd-btn'>{btn1}</button>
      <button className='button'>{btn2&&(<img src={timeSrc} alt="" />)}{btn2}</button>
      </div>
      </div>
  </div>
}
export default NewReleased