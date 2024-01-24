import logo_blue from './img/logo-blue.svg';
import logo_green from './img/logo-green.svg';
import logo_yellow from './img/logo-yellow.svg';
import Card from '../Home/Card';
import{ useState } from 'react';


function Processing(params){

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
        },  {   
            "id": 7,
            "img":"logo-blue",
            "NumQuestions" : "169",
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : "#5A86BF"
        }
        ,  {   
            "id": 8,
            "img":"logo-blue",
            "NumQuestions" : "169",
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : "#5A86BF"
        },
        {   
            "id": 9,
            "img":"logo-blue",
            "NumQuestions" : "169",
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : "#5A86BF"
        }
        ,  {   
            "id": 10,
            "img":"logo-blue",
            "NumQuestions" : "169",
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : "#5A86BF"
        },
        {   
            "id": 11,
            "img":"logo-blue",
            "NumQuestions" : "169",
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : "#5A86BF"
        },
        {   
            "id": 12,
            "img":"logo-blue",
            "NumQuestions" : "169",
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : "#5A86BF"
        },  {   
            "id": 13,
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
    console.log(quiz.length === 0)
    const [visibleCard, setvisibleCard] = useState(5);
    const handleLoadmore = () =>{
        setvisibleCard(prev => prev + 5);
    } 

    return(
        <div className='main-acticity'>
                <main>
                    {quiz.slice(0,visibleCard).map((quiz) => (
                        <Card key={quiz.id}
                        NumQuestions={quiz.NumQuestions} 
                        TitleCard={quiz.TitleCard}
                        Author={quiz.Author}
                        color={quiz.color}
                        img={handleLogo(quiz.img)}
                        />   
                    ))}

                </main>
                {   ( quiz.length >= visibleCard && (quiz.length !== 0)) &&
                    <div className='loadmore' onClick={handleLoadmore}>Load more</div>
                }
        </div>  
    );
}

export default Processing;