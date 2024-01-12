

function answerChoice(props){
    const myStyle = {
        backgroundColor: props.color
    };
    return(
        <div className="answerChoice">
            <div className="point-answer" style={myStyle}></div>
            <span>{props.answers}</span>
        </div>
    );
}

export default answerChoice;