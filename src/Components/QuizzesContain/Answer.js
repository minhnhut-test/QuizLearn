
import './Answer.css';

function Answer(params){
    const answers = params.answer || [];
    return(
        <div className="answer">
            {answers.map((index) =>(
                <p> {index}</p>
            ))}
            
        </div>
    );
}

export default Answer;