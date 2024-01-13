import { useState } from "react";
import AnswerCheck from "./AnswerCheck";
import './Check.css';


function Check(params){

    const [data,setData] = useState(
        [
            {
                "question" : "Question : Which of the following statement is belong to DML?",
                "answerChoices" : [
                    "Create ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss","Create 1","Create 2","Create 3"
                ],
                "answer" : ["Create"]
            },
            {
                "question" : "Question : Which of the following statement is belong to DML?",
                "answerChoices" : [
                    "Create","Create 1","Create 2","Create 3"
                ],
                "answer" : ["Create"]
            },
            {
                "question" : "Question : Which of the following statement is belong to DML?",
                "answerChoices" : [
                    "Create","Create 1","Create 2","Create 3","Create 4"
                ],
                "answer" : ["Create"]
            },
            {
                "question" : "Question : Which of the following statement is belong to DML?",
                "answerChoices" : [
                    "Create","Create 1","Create 2","Create 3"
                ],
                "answer" : ["Create","Create 1"]  
            }
        ]
    )


    const [question,setQuestion] = useState({});
    const userChoice = (index) =>{
        console.log(index);
    }

    return(
        <div className="check">
                <div className="tool-check"></div>
                <div>
                    <div className="achievement">Score : 1100</div>
                </div>
                <div className="question-check">
                    <p>
                        {data[0].question}
                    </p>
                </div>
                <div className="answer-check">
                    {data[0].answerChoices.map((index) => (
                         <AnswerCheck answer={index} onlick={() => userChoice(index)}/>
                    ) )}
                   
                </div>
        </div>  
    );
}

export default Check;