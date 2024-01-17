import Welcome from "./Components/WelcomePages";
import Login from "./Components/RegisterLogin/Login";
import Register from "./Components/RegisterLogin/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Community from "./Components/Community";
import Activity from "./Components/Activity/Activity";
import BodyCommunity from "./Components/BodyCommunity/BodyCommunity";
import MyLibrary from "./Components/MyLibrary/MyLibrary";
import Reports from "./Components/Reports/Report";
import CreateQuiz from "./Components/CreateQuiz/CreateQuiz";
import QuizzesContainer from "./Components/QuizzesContain/QuizzesContainer";
import FlashCard from "./Components/FlashCard/FlashCard";
import Check from "./Components/Check/Check";
import LoadingPage from "./Components/Loading/Loading";



function App() {
  return (
  
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="community" element={<Community />}>
                  <Route index element={<BodyCommunity />}/>  
                  <Route path="activity" element={<Activity />} />
                  <Route path="my-library" element={<MyLibrary />} />
                  <Route path="report"  element={<Reports />}/>
          </Route>
          <Route path="create-quiz" element={<CreateQuiz />} />
          <Route path="quizz-container" element={<QuizzesContainer />} /> 
          <Route path="flash-card" element={<FlashCard />} />
          <Route path="check" element={<Check />} />
          <Route path="loading" element={<LoadingPage />} />
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
