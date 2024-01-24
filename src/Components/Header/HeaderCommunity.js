import './HeaderCommunity.css';
import logo from './img/logo.svg';
import { Link, useNavigate } from "react-router-dom";
import mobileActive from './img/nav-mobile-active.svg';
import navMobile from './img/nav-mobile.svg';
import { useState } from 'react';

function HeaderCommunity(params) {
    const navigate = useNavigate();

    const [isUser,setIsUser] = useState(false);
    
        
    const [isActive,setActive] = useState(false);
    const handleActive = () => {
        setActive(prev => !prev);
    }

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
                        <Link to="/community" >Home</Link>
                    </li>
                    <li>
                        <Link to="/community/activity"  >Activity</Link>
                    </li>
                    <li>
                        <Link to="/community/my-library" >My library</Link>
                    </li>

                    <form>
                        <input type="text" placeholder="Search" />
                        <button>Search</button>
                    </form>
                </ul>
                
             
                <div class="user">  
                    
                </div>
                
              
              

                
                <div class="nav-img">
                    {   isActive &&
                         <img src={mobileActive} alt="" id="nav-active" onClick={handleActive} />
                    }
                       
                    {   !isActive &&     
                         <img src={navMobile} alt="" class="nav-tablet" id="nav-tablet-community" onClick={handleActive}/>
                    }  
                       
                </div>


                {
                    isActive &&
                    <div className='mobile-tablet-active'>
                           <ul>
                                    <li>
                                        <Link to="/community" onClick={handleActive} >Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/community/activity" onClick={handleActive} >Activity</Link>
                                    </li>
                                    <li>
                                        <Link to="/community/my-library" onClick={handleActive} >My library</Link>
                                    </li>

                                    <form>
                                        <input type="text" placeholder="Search" />
                                        <button>Search</button>
                                    </form>
                           </ul>
                    </div>
                }
        </header>
    );
}

export default HeaderCommunity;