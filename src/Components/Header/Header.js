import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css';
import logo from './img/logo.svg';
import mobileActive from './img/nav-mobile-active.svg';
import navMobile from './img/nav-mobile.svg';
import { Link } from 'react-router-dom';

function Header() {
    
    let navigate = useNavigate();
    const EventLogin = () =>{
        let path = '/login';
        navigate(path);
    }
    const EventRegister = () =>{
        let path = '/register';
        navigate(path);
    }
    const [isActiveMobile,setActiveMobile] = useState(false);
    const handleClick = () =>{
        setActiveMobile(prev => !prev);
        
    }
    return(
        <header>
            
            <img src={logo} alt="" class="logo" onClick={
                () => {
                    let path = "/";
                    navigate(path);
                }    
            }
            style={{cursor:'pointer'}}
            />

            <ul className="nav-desktop" id="menu-mobile">
                <li><Link to="/community">Home</Link></li>
                <li><a href="">Services</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Help</a></li>

                <button className="button-desktop" onClick={EventRegister}>
                    Register
                </button>
    
                <button className="button-desktop" onClick={EventLogin}>
                    Login
                </button>

            </ul>
            {   isActiveMobile &&
                <img src={mobileActive} alt="" id="nav-active"  onClick={handleClick} />
            }
            {   !isActiveMobile &&
                 <img src={navMobile} alt="" class="nav-tablet" id="nav-tablet" onClick={handleClick} />
            }
           


            {   isActiveMobile &&
                <div className='nav-mobile'>
                        <ul>
                            <li><Link to="/community">Home</Link></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Help</a></li>

                            <button className="button-desktop" onClick={EventRegister}>
                                Register
                            </button>
                
                            <button className="button-desktop" onClick={EventLogin}>
                                Login
                            </button>
                            
                        </ul>
                </div>
            }
        </header>
    );
}

export default Header;