import React from 'react'
import './home.css'
import WatchImg from '../../assets/watchNow.png'
import WatchImg1 from '../../assets/watchLater.png'
import Calendar from '../../assets/calend.png'
import Time from '../../assets/time.png'
import Star from '../../assets/star.png'
const Home = () => {
  return (
    <div className='home-container'>
      <div className='button-container'>
      <button className='watch-now'>Whatch Now <img src={WatchImg} alt="" /></button>
      <button className='watch-leter'>Whatch Later <img src={WatchImg1} alt="" /> </button>
    </div>
    <div className='title'><p>Avatar: The Way of Water</p></div>
    <div className='about-movie'>
      <button>Action</button>
      <button>Adventure</button>
      <button>Science Friction</button>
      <p><img src={Calendar} alt="" />2022</p>
      <p><img src={Time} alt="" />3:12:00</p>
      <p><img src={Star} alt="" />8.5</p>
    </div>
    <div className='description'>
      <p>
      Set more than a decade after the events of the first film, learn the story of the 
      Sully family (Jake, Neytiri, and their kids), the trouble that follows them, 
      the lengths they go to keep each other safe, the battles they fight to stay alive,
      and the tragedies they endure
      </p>
    </div>
    <div className='move-next'>
      <div className='active'></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  
  )
}

export default Home
