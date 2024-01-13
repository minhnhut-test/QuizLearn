

function AnswerCheck(params) {
    return(
        <div onClick={params.onlick}>
           <div>
                <p>
                    {params.answer}
                </p>
           </div>
        </div>
    );
}

export default AnswerCheck;