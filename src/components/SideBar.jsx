import React from 'react'
import { NavLink } from 'react-router-dom'
const SideBar = () => {
  return (
    <div className='sidebar'>
        <nav>

            <ul className='side-icon'>
                <li><NavLink to="/home" className="nav-link"><i className="fa-solid fa-house"></i>Home</NavLink></li>
                <li><NavLink to="/items" className="nav-link"><i className="fa-solid fa-bag-shopping"></i>Items</NavLink></li>
                <li><NavLink to="/banking" className="nav-link"><i className="fa-solid fa-building-columns"></i>Banking</NavLink></li>
                <li><NavLink to="/sale" className="nav-link"><i className="fa-solid fa-cart-shopping"></i>Sales</NavLink></li>
                <li><NavLink to="/purchase" className="nav-link"><i className="fa-solid fa-bag-shopping"></i>Purchases</NavLink></li>
                <li><NavLink to="/time" className="nav-link"><i className="fa-regular fa-clock"></i>Time Tracking</NavLink></li>
                <li><NavLink to="/account" className="nav-link"><i className="fa-solid fa-user"></i>Account</NavLink></li>
                <li><NavLink to="/report" className="nav-link"><i className="fa-solid fa-chart-line"></i>Reports</NavLink></li>
                <li><NavLink to="/document" className="nav-link"><i className="fa-regular fa-file"></i>Documentals</NavLink></li>
                <li><NavLink to="/payroll" className="nav-link"><i className="fa-solid fa-dollar-sign"></i>Payroll</NavLink></li>
                <li><NavLink to="/config" className="nav-link"><i className="fa-solid fa-toggle-on"></i>Configure Features List</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default SideBar
