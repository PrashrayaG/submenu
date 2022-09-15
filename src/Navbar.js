import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'

import { useGlobalContext } from './context'

const Navbar = () => {

  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();

  // making a function which shows submenu when we hover the mouse
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();

    // console.log(tempBtn)

    // need two values. middle and bottom
    const center = (tempBtn.left + tempBtn.right)/2;
    const bottom = tempBtn.bottom - 3; // there is 3 because we want to lift submenu 3 Px up

    // console.log(e.target);
    openSubmenu(page,{center,bottom});
  }

  const  handleSubmenu = (e) => {
    if(!e.target.classList.contains('link-btn')) { // if the target that we are hovering does nor have class of link-btn then close it
      closeSubmenu()
    }
  }

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className="nav-center">

        <div className="nav-header">
          <img src={logo} alt="stripe" className='nav-logo'/>
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars/>
          </button>
        </div>

        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>

          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>

          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
          <button className='btn signin-btn'>Sign In</button>
      </div>
    </nav>
  )
}

export default Navbar
