import Introduction from "./Introduction";
import MainSide from "./MainSide";
function Home(){
    return(
        <div className="container">
            <Introduction />
            <MainSide />
        </div>
    );
}

export default Home;