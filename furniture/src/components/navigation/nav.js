import React from 'react';
import './nav.style.css'

function Nav() {
  return <div className='nav-container primary-color general-padding'>
      <div className='logo-container'>
          <img src='/assets/images/logo.png' alt='img'/>
      </div>
      <ul className='nav-menu-container'>
          <NavMenuMitem label='Home'/>
          <NavMenuMitem label='About'/>
          <NavMenuMitem label='Contact'/>
           
      </ul>
  </div>;
}

const NavMenuMitem = ({label='label'})=>{
     return <li className='nav_menu_item'>{label}</li>
}


export default Nav;
