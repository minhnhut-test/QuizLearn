import HeaderCommunity from './Header/HeaderCommunity';
import Banner from './Banner/Banner';
import Footer from '../Components/Footer/Footer';
import { Outlet } from "react-router-dom";

import './Community.css';
function  Community(params) {
    return(
        <div className="community">
            <Banner />
            <HeaderCommunity />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Community;