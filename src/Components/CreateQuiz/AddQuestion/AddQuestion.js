
import { useState } from 'react';
import icon_back from '../img/add-question-back.svg';
import icon_plus from '../img/plus.svg';
import './AddQuestion.css';
import Answer from './Answer';
import MultipleAnswer from './MultipleAnswer';
import trash from '../img/trash.svg';


function AddQuestion(props){

    const [isMultiple,setIsMultiple] = useState(false);

    const clickSingleAnswer = () =>{
        setIsMultiple(false);
    }
    
    const clickMultipleAnswer = () =>{
        setIsMultiple(true);
    }

    const myStyle = {
        'background': '#F24B4B',
        'color': '#FFF'
    }
    //
    const [listMultiple ,setListMultiple] = useState([
        <MultipleAnswer key={0} />,
        <MultipleAnswer key={1} />,
        <MultipleAnswer key={2} />,
        <MultipleAnswer key={3} /> 
    ])
    const addAnswer = () => {
        const newAnswer = <MultipleAnswer key={listMultiple.length} />;
        setChoices([...choices,{
            "userChoice": "",
            "isAnswer" : 0
        }])
        setListMultiple([...listMultiple, newAnswer]);
    };
    const removeAnswer = (index) => {
        const updatedAnswers = [...listMultiple];
        updatedAnswers.splice(index, 1);
        setListMultiple(updatedAnswers);
    };
///
    const [listSingle,setListSingle] = useState([
        <Answer key={0} />,
        <Answer key={1} />,
        <Answer key={2} />,
        <Answer key={3} />
    ]);

    const addAnswerSingle = () =>{
        const newAnswer = <Answer key={listSingle.length} />;
        setChoices([...choices,{
            "userChoice": "",
            "isAnswer" : 0
        }])
        setListSingle([...listSingle,newAnswer]);
    }

    const removeAnswerSingle = (index) =>{
        const updatedAnswers = [...listSingle];
        updatedAnswers.splice(index, 1);
        setListSingle(updatedAnswers);
    }




    const goBack = () =>{
        props.setIsAddQuestion((prev) => !prev);
    }

   

    const [question,setQuestion] = useState("");
    const [choices,setChoices] = useState([
        {
            "userChoice": "",
            "isAnswer" : 0
        },{
            "userChoice": "",
            "isAnswer" : 0
        },{
            "userChoice": "",
            "isAnswer" : 0
        },{
            "userChoice": "",
            "isAnswer" : 0
        }
    ])

    

    const onChangeQuestion = (event) =>{
        setQuestion(event.target.textContent);
    }



   
    const saveQuestion = () =>{
        //
        let flag = false;
        const questionAdd = {
            "question" : question,
            "answerChoices" : choices
        }
        if(question !== ""){
            choices.map((element) => {
                if(element.isAnswer === 1){
                    flag = true;
                }
            })
        }
        
        if(flag === true){
            props.setListQuestion([...props.listsQuestion,questionAdd]);
            props.setIsAddQuestion((prev) => !prev);
        }
        
    }

    return(
        <form className="add-question">
                <header>
                    <div onClick={goBack} style={{cursor: 'pointer'}}>
                        <img src={icon_back} alt='icon_back'/>
                    </div>

                    <div onClick={saveQuestion} className='button-add-question'>
                        Save question
                    </div>
                </header>

                <div className='add-question-tool'>

                </div>

                <div className='question-type'>

                
                    {isMultiple ?
                         <div className='multiple-answer'  
                         style={myStyle}
                         onClick={clickMultipleAnswer}>Multiple correct answer</div>
                         :
                         <div className='multiple-answer'  
                         onClick={clickMultipleAnswer}>Multiple correct answer</div>
                    }
                    {isMultiple ? 
                         <div className='single-answer' onClick={clickSingleAnswer}>Signle correct answer</div> 
                         :
                         <div className='single-answer' 
                         style={myStyle}
                         onClick={clickSingleAnswer}>Signle correct answer</div> 
                    }
                   
                </div>
                

                {   !isMultiple &&
                    <div className='form-answer single-answer'>
                        <div className='question-added' >
                            <div >
                                <p className='question-p' onInput={onChangeQuestion} contenteditable="true"  data-placeholder="Enter your question here..." > 
                                    
                                </p>
                            </div>
                        </div>
                        <div className='answer-container'>

                            {listSingle.map((index) => (
                                <div className='card-container'>
                                    <Answer index_name={index.key} 
                                        choices={choices}
                                    />
                                    <div onClick={() => removeAnswerSingle(index)}>
                                        <img  src={trash} alt='icon trash'/>
                                    </div>
                                </div>
                            ))}
                          
                            <div className='add-answer' onClick={addAnswerSingle}>
                                <img src={icon_plus} alt='icon plus'/>
                            </div>
                        </div>
                    </div>
                }



                {
                    isMultiple &&
                    <div className='form-answer multiple-answer'>
                        <div className='question-added'>
                        <div>
                                <p className='question-p'  onInput={onChangeQuestion}  contenteditable="true" 
                                    data-placeholder="Enter your question here..."
                                > 
                                    
                                </p>
                        </div>
                        </div>
                        <div className='answer-container'>
                                {listMultiple.map((index) =>(
                                    <div className='card-container'>
                                        <MultipleAnswer 
                                             index_name={index.key} 
                                             choices={choices}
                            
                                        />
                                        <div onClick={() => removeAnswer(index)}>
                                            <img  src={trash} alt='icon trash'/>
                                        </div>
                                    </div>
                                    
                                ))}    
                                <div className='add-answer' onClick={addAnswer} >
                                    <img src={icon_plus} alt='icon plus'/>
                                </div>
                        </div>
                    </div>
                }
                

        </form>
    );
}

export default AddQuestion;

