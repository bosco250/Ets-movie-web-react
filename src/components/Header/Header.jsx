import React from 'react'
import Search from '../../assets/Vector.png';
import Notification from '../../assets/notif.png';
import './Header.css'
const Header = () => {
  return (
    <div className='header-container'>
      <ul>
        <li>Home</li>
        <li><a href="#">Genre</a></li>
        <li><a href="#">Country</a></li>
        <li>
          <input type="text" placeholder='Search Movies.....' />
          <img  className='search' src={Search} alt="search" />
        </li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">Series</a></li>
        <li><a href="#">Animation</a></li>
        <li><a href="#">Login/SignUp</a></li>
        <li><a href="#">
          <img src={Notification} alt='Notification' className='notification' /></a>
        </li>
      </ul>
      
    </div>
  )
}

export default Header
