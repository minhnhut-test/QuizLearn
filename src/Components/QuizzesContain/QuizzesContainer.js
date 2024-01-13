import './QuizzesContainer.css';
import Header from '../Header/HeaderCommunity';
import Banner from '../Banner/Banner';
import Question from './Question';
import Answer from './Answer';
import { useState } from 'react';
import DeTailQuestion from './DetailQuestion';
import love_icon from './img/love.svg';
import comment from './img/comment.svg';
import arrow from './img/arrow.svg';
import { useNavigate } from 'react-router-dom';





function QuizzesContainer(params){

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
            
        
    });

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const handleBackQuestion = () =>{
        if(currentQuestion <= 0){

        }else  setCurrentQuestion((prev) => prev -1);
       
    }
    const handleGoQuestion = () =>{
        if(currentQuestion >= data.questions.length-1){

        }else  setCurrentQuestion((prev) => prev +1);
    }


    const [isQuestion,setIsQuestion] = useState(true);
    const handleIsQuestion = () =>{
        setIsQuestion((prev) => !prev);
    }

    const navigate = useNavigate();

    const sendToFlashCard = () =>{
        let path ="/flash-card";
        navigate(path);
    }

    const sendToCheck = () =>{
        let path ="/check";
        navigate(path);
    }

    return(
        <div className="quizzes-container">
                <Banner />
                <Header />
                <div className='quizz-container'>
                    <h1>{data.titleQuiz}</h1>
                    <div className='reaction'>
                        <div style={{cursor: 'pointer'}}>
                            <img src={love_icon} />
                            <span>{data.loves} loves</span>
                        </div>
                        <div style={{cursor: 'pointer'}}>
                            <img src={comment} />
                            <span>{data.comments} comments</span>
                        </div>
                    </div>

                    <div className='content-quiz' >
                        <div className='question-answer' onClick={handleIsQuestion} style={{cursor: 'pointer'}}>
                            {   isQuestion &&
                                <Question 
                                    question= {data.questions[currentQuestion].question} 
                                    answerChoice={data.questions[currentQuestion].answerChoices}
                                />
                            }
                            {   
                                !isQuestion &&
                                <Answer answer={data.questions[currentQuestion].answer} />
                            }
                        </div>

                        <div className='navigate-question'> 
                            <img src={arrow} onClick={handleBackQuestion} style={{cursor: 'pointer'}} />
                            <span>
                                {currentQuestion+1}/{data.questions.length}
                            </span>
                            <img src={arrow} onClick={handleGoQuestion} style={{cursor: 'pointer'}} />    
                        </div>

                        <div className='line'>

                        </div>     
                    </div>

                    <div className='button-quizzes'>
                                <div style={{cursor: 'pointer'}} onClick={sendToFlashCard} >Flash cards</div>
                                <div style={{cursor: 'pointer'}} onClick={sendToCheck} >Check</div>
                    </div>

                    <div className='author' style={{cursor: 'pointer'}}>
                            <div className='avatar'>
                                <img src={data.author.imgAvatar} />
                            </div>
                            <div>
                                <h5>Author</h5>
                                <span>{data.author.authorname}</span>
                            </div>
                    </div>

                    <div className='question-card-joined'>
                            <h1>All questions ({data.questions.length})</h1>
                            {
                                data.questions.map((index) => (
                                    <DeTailQuestion answer={index.answer} 
                                        key={index}
                                        question={index.question}
                                        answerChoice={index.answerChoices}
                                    />
                                ))
                            }
                    </div>

                </div>
        </div>
    );
}

export default QuizzesContainer;