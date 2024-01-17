import React ,{ useState } from 'react';
import './Register.css';
import { Link , useActionData, useNavigate } from "react-router-dom";
import LoadingPage from '../Loading/Loading';
import axios from 'axios';
import warning_icon from './img/warning.svg';

function Register(){
    const [isLoading,setIsLoading] = useState(false);

    const [data,setData] = useState({
        "email" : '',
        "password" : '',
    })

    const [warningEmail,setWarningEmail] = useState(false);
    const [warningEmailMess,setWarningEmailMess] = useState("");
    const [warningPassword,setWarningPassword] = useState(false);
    const [warningPasswordMess,setWarningPasswordMess] = useState("");

    const handleChangeInput = (event) =>{
        const {name,value} = event.target;
        if(name === "email"){
            if( value === ''){
                setWarningEmail(true);
                setWarningEmailMess("required");
                return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g; 
            if(!emailRegex.test(value)){
                setWarningEmail(true);
                setWarningEmailMess("invalid email");
                return;
            }
        }
       
        
        if(name === "password" ){
            if(value === ''){
                setWarningPassword(true);
                setWarningPasswordMess("required");
                return;
            }
            if(value.length < 8){
                setWarningPassword(true);
                setWarningPasswordMess("Contain at least 8 character")
                return;
            }
        
        }
        setWarningPassword(false);
        setWarningEmail(false);
        setData({
            ...data,
            [name]:value,
         });
        
         
    }


    return(
        <div class="register">
            {isLoading && <LoadingPage /> }
            <form  method='post'>
                <h1>Register</h1>
                <div>
                    <label for="User name">Email</label>
                    <input type="text" name='email' 
                    onBlur={handleChangeInput}
                    placeholder='example@gmail.com' />
                    {
                        warningEmail && <label className='sup'>
                                            <img src={warning_icon} />
                                        {warningEmailMess}</label>
                    }
                </div>
                <div>
                    <label for="Password">Password</label>
                    <input type="password"  
                    onChange={handleChangeInput}
                    name='password' />
                    {
                        warningPassword && <label className='sup'>
                                                <img src={warning_icon} />
                                            {warningPasswordMess}</label>
                    }
                    
                </div> 
                <button type='submit'>Register</button>
                <p >You already have account ? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
}

export default Register;