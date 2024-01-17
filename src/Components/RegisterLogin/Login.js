import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import LoadingPage from '../Loading/Loading';
import { useState } from 'react';
import axios from 'axios';
import warning_icon from './img/warning.svg';


function Login(){

  const [isLoading,setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [data,setData] = useState({
    "username" : "",
    "password" : ""
  })
  const handleInputChange = (event) => {
    const {name , value} = event.target;
    setData({
      ...data,
      [name] : value,
    })
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    try{
      setIsLoading(true);
        const url = "http://localhost:8084/api/login?" +
                     "username="+data.username
                     +"&password="+data.password; 
        const response = await axios.post(url,null,{ withCredentials: true });
        navigate('/community');
    }catch(error){
        setIsLoading(false);
        console.error('Error:', error.message);
    }

  }

  const [warningPassword,setWarningPassword] = useState(false);
  const [warningEmail,setWarningEmail] = useState(false);



  return(
    <div className="login">
      {isLoading && <LoadingPage />}
        <form  method='post' onSubmit={handleLogin}>
            <h1>Login</h1>
            <div>
                <label for="User name">Email</label>
                <input type="text" onChange={handleInputChange} placeholder='example@gmail.com'/>
                {warningEmail && 
                   <label for=""><img src={warning_icon} />Invalid email</label>
                }
            </div>
            <div>
                <label for="Password">Password</label>
                <input type="password" onChange={handleInputChange} />
                {warningPassword &&
                  <label for=""><img src={warning_icon} />Invalid password</label>
                } 
            </div>
            <button type='submit' >Login</button>
            <p>Forgot password ?  <Link to="" >Reset it</Link></p>
            <p>You dont have account ? <Link to="/register" >Register</Link></p>
        </form>

    </div>


  );
}

export default Login;