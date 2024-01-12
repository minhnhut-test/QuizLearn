import './BodyCommunity.css';
import icon_create_quiz from './img/icon-create-quiz.svg';
import GroupQuiz from './GroupQuiz';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function BodyCommunity() {

    let navigate = useNavigate();
    const routeChange = () =>{
        let path  = '/create-quiz';
        navigate(path);
    }


    return(
        <div className="BodyCommunity">
            <div class="head-body">
                    <form>
                        <input type="text" placeholder="Enter code" />
                        <button>Join</button>
                    </form>

                    <button class="create-quiz" onClick={routeChange}>
                        <img src={icon_create_quiz} />
                        <h4><Link to="/create-quiz">Create quiz</Link></h4>
                    </button>
            </div>
            
            <GroupQuiz titleGroup="Recent Activity" numberCard={4}/>
            <GroupQuiz titleGroup="FPT University" numberCard={4}/>
            <GroupQuiz titleGroup="Quizzes" numberCard={4}/>

        </div>
    );
}

export default BodyCommunity;