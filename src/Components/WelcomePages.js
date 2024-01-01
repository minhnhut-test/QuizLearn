import Banner from './Banner/Banner';
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import left from './Home/img/img-left.svg';
import right from './Home/img/img-right.svg';
import './WelcomePages.css';
function Welcome() {
  

    return(
        <div>
               <Banner />
               <Header />
               <div class="container-img">
                    <img src={left} className="img-left" />
                    <img src={right} className="img-right" /> 
               </div>
               <Home />
               <Footer />
        </div>
    );
}

export default Welcome;