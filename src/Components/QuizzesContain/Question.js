
import './Question.css';

function Question(params){
   
    const answerChoices =  params.answerChoice || [];
    
    return(
        <div className="question-joined">
            <h1>{params.question}</h1>
            <div className="answerChoices">

                {answerChoices.map((element) => (
                     <p>{element}</p>  
                ) 
                )
                }
                
    
            </div>
        </div>
    );
}

export default Question;