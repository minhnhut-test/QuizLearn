import './HeaderCommunity.css';
import logo from './img/logo.svg';
import { Link, useNavigate } from "react-router-dom";
import mobileActive from './img/nav-mobile-active.svg';
import navMobile from './img/nav-mobile.svg';
import { useState } from 'react';

function HeaderCommunity(params) {
    const navigate = useNavigate();

    const [isUser,setIsUser] = useState(false);
    
        
    

    return(
        <header class="community-head">
                <img src={logo} class="community-logo"
                    onClick={
                        () => {
                            let path = "/";
                            navigate(path);
                        }
                    }
                    style={{cursor:'pointer'}}
                />
                <ul class="community-mobile-nav">
                    <li>
                        <Link to="/community">Home</Link>
                    </li>
                    <li>
                        <Link to="activity">Activity</Link>
                    </li>
                    <li>
                        <Link to="my-library">My library</Link>
                    </li>
                    <li>
                        <Link to="report">Reports</Link>
                    </li>

                    <form>
                        <input type="text" placeholder="Search" />
                        <button>Search</button>
                    </form>
                </ul>
                
             
                <div class="user">  
                    
                </div>
                
              
              

                
                <div class="nav-img">
                        <img src={mobileActive} alt="" id="nav-active" />
                        <img src={navMobile} alt="" class="nav-tablet" id="nav-tablet" />
                </div>
        </header>
    );
}

export default HeaderCommunity;