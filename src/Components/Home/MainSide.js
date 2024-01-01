import HeadMain from "./HeadMain";
import Card  from "./Card";
import './Card.css';

function MainSide() {
    const listCardInfor = [
        {   
            "img":'logo-green.svg',
            "NumQuestions" : 169,
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : '#4CD948'
        },
        {   
            "img":'logo-yellow.svg',
            "NumQuestions" : 169,
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : "#F2DC6D"
        },
        {   
            "img":'logo-blue.svg',
            "NumQuestions" : 169,
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : "#5A86BF"
        },
        {
            "img":'logo-green.svg',
            "NumQuestions" : "169",
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : "#4CD948"
        },
        {
            "img":'logo-yellow.svg',
            "NumQuestions" : "169",
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : "#F2DC6D"
        },
        {   
            "img":'logo-blue.svg',
            "NumQuestions" : "169",
            "TitleCard" : "DBI",
            "Author" : "Minh Nhut",
            "color" : "#5A86BF"
        }
    ]
    
    
    return(
        <section>

            <HeadMain />

            <main>
                {
                    listCardInfor.map(element => 
                        <Card NumQuestions={element.NumQuestions} 
                                TitleCard={element.TitleCard}
                                Author={element.Author}
                                color={element.color}
                                img={element.img}
                        />    
                    )
                }

                <button className="main-button-mobile">More</button>
            </main>
      
        </section>
    );
}

export default MainSide;