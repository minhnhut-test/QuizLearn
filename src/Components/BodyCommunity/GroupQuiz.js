import React , {useState} from 'react';
import  Card from '../Home/Card';
import '../Home/Card.css';
import './GroupQuiz.css';
import { Link } from "react-router-dom";

function  GroupQuiz(props) {

    const listCardInfor = [
        {   "id": 1,
            "img":'logo-green.svg',
            "NumQuestions" : 169,
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : '#4CD948'
        },
        {   
            "id": 2,
            "img":'logo-yellow.svg',
            "NumQuestions" : 169,
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : "#F2DC6D"
        },
        {   
            "id": 3,
            "img":'logo-blue.svg',
            "NumQuestions" : 169,
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : "#5A86BF"
        },
        {   
            "id": 4,
            "img":'logo-green.svg',
            "NumQuestions" : "169",
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : "#4CD948"
        },
        {   
            "id": 5,
            "img":'logo-yellow.svg',
            "NumQuestions" : "169",
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : "#F2DC6D"
        },
        {   
            "id": 6,
            "img":'logo-blue.svg',
            "NumQuestions" : "169",
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : "#5A86BF"
        }
    ]

    const [quiz,setQuiz] = useState(listCardInfor);
    const numberCrad = props.numberCard;
    return(
        <div className="groupQuiz">
            <h4>{props.titleGroup}{console.log(props.titleGroup)}</h4>
            <main>
                {quiz.slice(0,numberCrad).map((quiz) => (
                    <Card key={quiz.id}
                    NumQuestions={quiz.NumQuestions} 
                    TitleCard={quiz.TitleCard}
                    Author={quiz.Author}
                    color={quiz.color}
                    img={quiz.img}
                    />   
                ))}

            </main>

            
            <Link to={props.LinkTo}>See more</Link>
            
        </div>
    );
}

export default GroupQuiz;