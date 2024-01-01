import Welcome from "./Components/WelcomePages";
import Login from "./Components/RegisterLogin/Login";
import Register from "./Components/RegisterLogin/Register";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //     {/* <Welcome /> */}
    //     {/* <Login /> */}
    //     <Register />
    // </div>
    <BrowserRouter>
      <Routes>
           <Route path="/" element={<Welcome />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
    
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
