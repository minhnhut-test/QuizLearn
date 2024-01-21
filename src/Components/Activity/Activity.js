import './Activity.css';
import Card from '../Home/Card';
import React from 'react';
import{ useState } from 'react';
import logo_blue from './img/logo-blue.svg';
import logo_green from './img/logo-green.svg';
import logo_yellow from './img/logo-yellow.svg';
function Activity(){

    const listCard = [
        {   "id": 1,
            "img":"logo-green",
            "NumQuestions" : "169",
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : '#4CD948'
        },
        {   
            "id": 2,
            "img":"logo-yellow",
            "NumQuestions" : "169",
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : "#F2DC6D"
        },
        {   
            "id": 3,
            "img":"logo-blue",
            "NumQuestions" : "169",
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : "#5A86BF"
        },
        {   
            "id": 4,
            "img":"logo-green",
            "NumQuestions" : "169",
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : "#4CD948"
        },
        {   
            "id": 5,
            "img":"logo-yellow",
            "NumQuestions" : "169",
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : "#F2DC6D"
        },
        {   
            "id": 6,
            "img":"logo-blue",
            "NumQuestions" : "169",
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : "#5A86BF"
        }
    ]


    const handleLogo = (img) =>{

        if(img === "logo-green"){
            return logo_green;
        }
        if(img === "logo-blue"){
            return logo_blue;
        }
        if(img === "logo-yellow"){
            return logo_yellow;
        }
    }

    const [quiz,setQuiz] = useState(listCard);
    const [processing,setProccessing] = useState(true);
    const [complete,setComplete] = useState(false);
    const [created,setCreated] = useState(false);
    const handleFocusLi = (event) =>{
        const value = event.target.innerText;
        if(value === "Processing"){
            setProccessing(true);
            setComplete(false);
            setCreated(false);
        }
        if(value === "Completed"){
            setProccessing(false);
            setComplete(true);
            setCreated(false);
        }
        if(value === "Created"){
            setProccessing(false);
            setComplete(false);
            setCreated(true);
        }
    }
    return(
        <div className="activity">
            <div className="activity-head">
                <ul>
                    <li className={processing ? "onclick" : ""}  onClick={handleFocusLi}>
                        <span >Processing</span>
                    </li>
                    <li className={complete ? "onclick" : ""}  onClick={handleFocusLi}>
                        <span  >Completed</span>
                    </li>
                    <li className={created ? "onclick" : ""}  onClick={handleFocusLi}>
                        <span  >Created</span>
                    </li>
                </ul>
            </div>
            <main>
                {quiz.slice(0,5).map((quiz) => (
                    <Card key={quiz.id}
                    NumQuestions={quiz.NumQuestions} 
                    TitleCard={quiz.TitleCard}
                    Author={quiz.Author}
                    color={quiz.color}
                    img={handleLogo(quiz.img)}
                    />   
                ))}

            </main>
        </div>
    );
}

export default Activity;