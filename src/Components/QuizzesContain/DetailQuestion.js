import Question from "./Question";
import Answer from "./Answer";
import './DetailQuestion.css';


function DeTailQuestion(params) {
    const answers = params.answer;
    return(
        <div className="detail-question">
            <div className="answer-in-detail">
                 <Answer answer={answers} />
            </div>
            <div className="question-in-detail">
                <Question question={params.question}
                            answerChoice={params.answerChoice}
                />
            </div>
        </div>
    );
}

export default DeTailQuestion;