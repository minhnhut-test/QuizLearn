import './QuestionCard.css';
import './AnswerChoice';
import AnswerChoice from './AnswerChoice';
import { useState } from 'react';
import trash from './img/trash.svg';

function QuestionCard(params) {
    const [answerChoice,setAnswerChoice] = useState(params.answerChoice);
    const answer = params.answer;




    return(
        <div class="question-container">
            
            <div class="header-question">
                    <span>
                        Question {params.numberQuestion}
                    </span>

                    <button>
                        Edit
                    </button>

                    <div onClick={params.handleRemoveQuestion}>
                        <img src={trash} alt='icon trash'/>
                    </div>
            </div>

            <div class="bottom-question">

                <h4>{params.question}</h4>
                
                <div>

                    <label>answer choices</label>

                    <div></div>

                </div>

                <div class="answer">

                    {
                        answerChoice.map((element,index) => answer.includes(element) ? 
                        (
                            <AnswerChoice key={index} answers={element} color={"#4CD948"} />
                        ):<AnswerChoice key={index} answers={element} />
                        )
                        
                    }

                        

                </div>

            </div>

        </div>
    )
}

export default QuestionCard;