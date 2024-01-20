



function Card(props) {

    const myStyle = {
        backgroundColor: props.color
    };

    return(
        <div className="main-card">
                <div style={myStyle} class="head-card">
                    <img src={props.img} alt=""/>
                    <span>{props.NumQuestions}Qs</span>
                </div>
                <div class="bottom-card">
                    <h4>{props.TitleCard}</h4>
                    <span>{props.Author}</span>
                </div>
        
        </div>
    );
}

export default Card;