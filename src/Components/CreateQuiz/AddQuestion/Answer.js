

function  Answer(params) {
    

    const handleOnFocus = (event) =>{
        event.target.style.background = "rgba(0, 0, 0, 0.25)";
    }
    const handleOnBlur = (event) => {
        event.target.style.background = "transparent";
    }

    return(
        <div>
            
           <div  onFocus={handleOnFocus} onBlur={handleOnBlur}>
                <p contenteditable="true" >
                    Type answer here
                </p>
           </div>
    
            <input type="radio" name={"name"+params.index_name}  />
    
        </div>
    );
}

export default Answer;