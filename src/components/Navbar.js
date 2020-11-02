import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import AppBar from '../components/AppBar'
import { Redirect } from "react-router-dom";



function Navbar() {
  
  const [menubar , setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!menubar);
  let zee =  localStorage.getItem("uid");
  if(!zee){
    
    return (<Redirect to={"User"}/>)
  }
 
  return (
    <div>
        
      <IconContext.Provider value={{ color: '#fff' }}>
        
        <div className='navbar'>
          
          <Link to='#' className='menu-bars'>
            
            <FaIcons.FaBars onClick={showSidebar} />
          
          </Link>
          <AppBar/>
              
         </div>
      
        <nav className={menubar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
              
                <AiIcons.AiOutlineClose />
                
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          
        </nav>
      </IconContext.Provider>
   
    </div>
    
  );
                  
}

export default Navbar;