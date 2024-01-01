import Information from './Information';
import Legal from './Legal';
import Rating from './Rating';
import './Footer.css';

function Footer() {
    return(
            <footer>

              <div>
                <article>Quiz learn</article>

                <Information />

                <Legal />

                <Rating />

                <p>Copyright @ : quizlearn@gmail.com</p>
              </div>
                
            </footer>
    );
}

export default Footer;