import './Activity.css';
import Card from '../Home/Card';
import React from 'react';
import{ useState } from 'react';


function Activity(){

    const listCard = [
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

    const [quiz,setQuiz] = useState(listCard);
    
    return(
        <div className="activity">
            <div className="activity-head">
                <ul>
                    <li>
                        <span>Processing</span>
                    </li>
                    <li>
                        <span>Completed</span>
                    </li>
                    <li>
                        <span>Created</span>
                    </li>
                </ul>
            </div>
            <img src={"logo-blue.svg"} />
            <main>
                {quiz.slice(0,5).map((quiz) => (
                    <Card key={quiz.id}
                    NumQuestions={quiz.NumQuestions} 
                    TitleCard={quiz.TitleCard}
                    Author={quiz.Author}
                    color={quiz.color}
                    img={quiz.img}
                    />   
                ))}

            </main>
        </div>
    );
}

export default Activity;