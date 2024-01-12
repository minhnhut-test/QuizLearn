import Header from '../Header/HeaderCommunity';
import Banner from '../Banner/Banner';
import './CreateQuiz.css';
import QuestionCard from './QuestionCard';
import { useState } from 'react';
import AddQuestion from './AddQuestion/AddQuestion';



function CreateQuiz(){

    // const {listsQuestion} = useContext(CreateQuizContext);
    const [listsQuestion,setListQuestion] = useState([
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
    ]);



    const [isAddQuestion,setIsAddQuestion] = useState(false);
    const clickAddQuestion = () =>{
        setIsAddQuestion((prev) => !prev);
    }

    const removeQuestion = (index) =>{
        const updatedQuestion = [...listsQuestion];
        updatedQuestion.splice(index, 1);
        setListQuestion(updatedQuestion);
    }


    return(
        
        <>
        
            {  
                isAddQuestion && <AddQuestion 
                                     setIsAddQuestion={setIsAddQuestion}
                                     setListQuestion={setListQuestion}
                                />
            }
            {
                !isAddQuestion &&
                <div className="create-quiz">

                <Banner />

                <Header />

                <form class="form-create-quiz">

                    <div>

                        <input type="text"  placeholder='Untitled Quiz' />
                        
                        <img src="setting.svg"/>

                        <button className="form-button-desktop">Save</button>

                    </div>

                    <button className="form-button-mobile">Save</button>



                    <button onClick={clickAddQuestion}>Add question</button>

                    <div className="frame-question">
                        
                        {listsQuestion.map((element,index) => (

                            
                                  <QuestionCard 
                                    handleRemoveQuestion={() =>removeQuestion(index)}
                                    numberQuestion={index+1}
                                    question={element.question}
                                    answerChoice={element.answerChoices}
                                    answer={element.answer}
                                    />

                            
                        
                        )
                        )}
                        

                    </div>

                </form>
                </div>
            }
        
        
        
        
        </>





       
    );
}

export default CreateQuiz;