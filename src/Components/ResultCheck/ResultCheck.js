import Header from '../Header/HeaderCommunity';
import Banner from '../Banner/Banner';
import './ResultCheck.css';
import { useState } from 'react';
import DeTailQuestion from '../QuizzesContain/DetailQuestion';


function  ResultCheck(params) {

    const [data,setData] = useState({
        "titleQuiz" : "DBI202",
        "loves" : 20,
        "comments" : 20,
        "author" : {
            "imgAvatar" : "setting.svg",
            "authorname" : "nhutminhtran05"
        },
        "questions" : [
            {
                "question" : "Question : Which of the following statement is belong to DML?",
                "answerChoices" : [
                    "Create","Create 1","Create 2","Create 3"
                ],
                "answer" : ["Create"],
                "userChoice" : false 
            },
            {
                "question" : "Question : Which of the following statement is belong to DML?",
                "answerChoices" : [
                    "Create","Create 1","Create 2","Create 3"
                ],
                "answer" : ["Create"],
                "userChoice" : true 
            },
            {
                "question" : "Question : Which of the following statement is belong to DML?",
                "answerChoices" : [
                    "Create","Create 1","Create 2","Create 3","Create 4"
                ],
                "answer" : ["Create"],
                "userChoice" : false 
            },
            {
                "question" : "Question : Which of the following statement is belong to DML?",
                "answerChoices" : [
                    "Create","Create 1","Create 2","Create 3"
                ],
                "answer" : ["Create","Create 1"]  ,
                "userChoice" : true 
            }
        ]
    });


    return(

        <div className="result-check">
                <Banner />
                <Header />
                <div className='result-container'>
                    <h1>DBI202</h1>
                    <h5>Summary check</h5>

                    <div className='player'>
                        <div className='player-img'>
                            
                        </div>
                        <h5>nhutminhtran05</h5>
                    </div>
                    
                    <div className='result-process-bar'>
                        <h6>Result</h6>
                        <span>20%</span>
                        <div className='process-bar'>
                            <div className='result-percent'>

                            </div>
                        </div>
                    </div>

                    <div className='rank'>
                        <h6>Rank</h6>
                        <p>1 / 100</p>
                    </div>

                    <div className='rank score'>
                        <h6>Score</h6>
                        <p>1805</p>
                    </div>

                    <button className='play-again'>
                        Play again
                    </button>

                    <button className='play-again find-more'>
                        Find a new quiz
                    </button>

                    <div className='result-correct'>
                        <p>3</p>
                        <h5>Correct</h5>
                    </div>

                    <div className='result-correct incorrect'>
                        <p>2</p>
                        <h5>Incorrect</h5>
                    </div>

                    <div className='result-container-question'>
                        <h1>All questions (169) </h1>
                        {
                                data.questions.map((index) => (
                                    <DeTailQuestion answer={index.answer} 
                                        key={index}
                                        question={index.question}
                                        answerChoice={index.answerChoices}
                                        color={index.userChoice ? "#4CD948" : "#F24B4B"}
                                    />
                                ))
                        }
                    </div>
                </div>
        </div>
    );
}

export default ResultCheck;