import React from 'react'
import logo from '../images/Baps_logo 2 (1).png'
const Header = () => {
  return (
    <div className='header'>
      <div className='navbar'>
        <div className="logo">
            <img src={logo} alt="" />
            <h3 className='text-warning'>Yogiraj</h3>
        </div>  
        <div className='header-text'>
            <i className="fa-solid fa-magnifying-glass icon"></i>
            <input className='inpu' style={{border:"2px solid white"}} type="text" placeholder='Search' />
        </div>
        <nav className=''>
            <ul  className='d-flex'>
                <li><a className='text-white ms-2' style={{textDecoration:"none"}} href=""><i className="fa-regular fa-bell"></i></a></li>
                <li><a className='text-white ms-2' style={{textDecoration:"none"}} href=""><i className="fa-regular fa-envelope"></i></a></li>
                <li><a className='text-white ms-2' style={{textDecoration:"none"}} href=""><i className="fa-solid fa-user"></i></a></li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
