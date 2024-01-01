import './Login.css';
import { Link } from "react-router-dom";
function Login(){
  return(
    <div className="login">

        <form action="">
            <h1>Login</h1>
            <div>
                <label for="User name">User name</label>
                <input type="text"/>
            </div>
            <div>
                <label for="Password">Password</label>
                <input type="text"/>
                <label for=""><a href="">Forgot password?</a></label>
            </div>
            <button>Login</button>
            <p>You dont have account ? <Link to="/register" >Register</Link></p>
        </form>

    </div>


  );
}

export default Login;