import './Introduction.css';
import sectionTablet from './img/img-section1-tablet.svg';
import sectionMobile1 from './img/section-img1.svg';
import sectionMobile2 from './img/section-img2.svg';
import imgAbsolute from './img/section-img3.svg';
import imgAbsoluteTablet from './img/section-img-tablet.svg';


function Introduction() {
    return(
        <section className="section-head">
                <h1 class="section-desktop">Quiz learn</h1>

                <div className="section-tablet">
                    <h1>Quiz</h1>
                    <img src={sectionTablet} alt="" />
                    <h1>learn</h1>
                </div>

                <div className="section-mobile">
                    <div>
                        <h1>Quiz</h1>
                        <img src={sectionMobile1} alt="" />
                    </div>
                    <div>
                        <img src={sectionMobile2} alt="" />
                        <h1>learn</h1>
                    </div>
                </div>

                <h4>Get an amazing knowledge when play quiz game</h4>

                <button>Start now</button>

                <p>Explore existing multiple choice questions or create your own style multiple choice questions</p>

                <img src={imgAbsolute} alt="" className="img-absolute"/>
                <img src={imgAbsoluteTablet} alt="" className="section-img-tablet"/>
        </section>
    );
}

export default Introduction;