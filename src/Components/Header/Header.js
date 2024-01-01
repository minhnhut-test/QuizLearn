import React from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css';
import logo from './img/logo.svg';
import mobileActive from './img/nav-mobile-active.svg';
import navMobile from './img/nav-mobile.svg';

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

    return(
        <header>
            
            <img src={logo} alt="" class="logo"/>

            <ul className="nav-desktop" id="menu-mobile">
                <li><a href="">Home</a></li>
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
            <img src={mobileActive} alt="" id="nav-active" />
            <img src={navMobile} alt="" class="nav-tablet" id="nav-tablet" />
        </header>
    );
}

export default Header;