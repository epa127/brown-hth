import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './Button.tsx';
import './Navbar.css'
import { routes } from '../constants/routes.tsx';

export default function Navbar() {
  const [click, setClick] = useState<boolean>(false);
  const [button, setButton] = useState<boolean>(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  // Indicates window width state (hamburger vs navbar)
  const showButton = () => setButton(window.innerWidth > 960);

  useEffect(() => {
    window.addEventListener('resize', showButton);
    return (() => window.removeEventListener('resize', showButton))
  },[]);

  return (
    <>
      <nav className={'navbar'}>
        <div className='navbar-container'>
          <Link 
            to='/' 
            className='navbar-logo' 
            onClick={closeMobileMenu} 
            tabIndex={0}
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            <img src='/images/hth-logo_no-background.png' alt='HTH -- Home'></img>
          </Link>
          <div 
            className={click ? 'menu-icon active' : 'menu-icon'} 
            onKeyDown={(e) => {if (e.key === 'Enter') {handleClick()}}} 
            onClick={handleClick} 
            tabIndex={button ? -1 : 0}
          >
            <div className="line" ></div>
            <div className="line" ></div>
            <div className="line" ></div>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'} tabIndex={-1}>
            {routes.slice(1).map((route) =>
            <li className='nav-item' tabIndex={-1} key={route.path}>
              <Link 
                to={route.path} 
                className='nav-links' 
                onClick={closeMobileMenu} 
                tabIndex={ button || click ? 0 : -1 }
                aria-current={location.pathname === route.path ? 'page' : undefined}
              >
                {route.label}
              </Link>
            </li>)}
          </ul>
        </div>
      </nav>
    </>
  )
}