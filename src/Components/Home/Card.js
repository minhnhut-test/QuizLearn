import { useNavigate } from "react-router-dom";




function Card(props) {

    const myStyle = {
        backgroundColor: props.color
    };
    const navigate = useNavigate();
    const handleDetailCard = () =>{
        let path = "/quizz-container";
        navigate(path);
    }

    return(
        <div className="main-card" onClick={handleDetailCard}>
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