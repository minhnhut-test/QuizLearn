import { useState } from "react";


function  MultipleAnswer(params) {
 
    
    const handleOnFocus = (event) =>{
        event.target.style.background = "rgba(0, 0, 0, 0.25)";
    }
    const handleOnBlur = (event) => {
        event.target.style.background = "transparent";
    }

    const [userChoice,setUserChoice] = useState("");
    const handleOnChangeAnswer = (event) =>{
        const value = event.target.textContent;
        setUserChoice(value);
    }
   params.choices[params.index_name].userChoice = userChoice;

   
   const [answerValue, setAnswerValue] = useState(0);
   const handleRadioChange = (event) =>{
        if(event.target.checked){
            setAnswerValue(1);
        }
   }
   console.log(answerValue);
   params.choices[params.index_name].isAnswer = answerValue;



    return(
        <div>
                                
            <div  onFocus={handleOnFocus} onBlur={handleOnBlur}>
                <p contenteditable="true" onBlur={handleOnChangeAnswer}
                     data-placeholder="Enter answer here..."
                >
                   
                </p>
           </div>
    
            <input type="checkbox"  onChange={handleRadioChange} />
    
        </div>
    );
}

export default MultipleAnswer;