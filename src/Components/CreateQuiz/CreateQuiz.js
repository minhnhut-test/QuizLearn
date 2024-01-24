import Header from '../Header/HeaderCommunity';
import Banner from '../Banner/Banner';
import './CreateQuiz.css';
import QuestionCard from './QuestionCard';
import { useState } from 'react';
import AddQuestion from './AddQuestion/AddQuestion';



function CreateQuiz(){

    // const {listsQuestion} = useContext(CreateQuizContext);
    const [listsQuestion,setListQuestion] = useState([
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
                                     listsQuestion={listsQuestion}
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
                        
                        <img src="setting.svg" alt='setting'/>

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