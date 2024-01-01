import phone from './img/icon-phone.svg';
import email from './img/icon-email.svg';
import location from './img/icon-location.svg';

function Information(){
    return(
      <section className="information">
                  <h4>Reach us</h4>
                  <ul>
                      <li>
                          <img src={phone} alt="phone"/>
                          <a href="#">+84389999999</a>
                      </li>
                      <li>
                          <img src={email} alt="email"/>
                          <a href="#" >quizlearn@gmail.com</a>
                      </li>
                      <li>
                          <img src={location} alt="location"/>
                          <a href="#" >Long Thanh My, Thu Duc, Ho Chi Minh VietNam</a>
                      </li>
                  </ul>
      </section>
    );
}

export default Information;