import './Register.css';
import { Link } from "react-router-dom";
function Register(){
    return(
        <div class="register">
            <form action="">
                <h1>Register</h1>
                <div>
                    <label for="First name">First name</label>
                    <input type="text" />
                </div>
                <div>
                    <label for="Last name">Last name</label>
                    <input type="text" />
                </div>
                <div>
                    <label for="Email">Email</label>
                    <input type="text" />
                </div>
                <div>
                    <label for="Phone number">Phone number</label>
                    <input type="text" />
                </div>
                <div>
                    <label for="User name">User name</label>
                    <input type="text" />
                </div>
                <div>
                    <label for="Password">Password</label>
                    <input type="text" />
                </div>
                <div>
                    <label for="Re-password">Re-password</label>
                    <input type="text" />
                </div>
                <button>Register</button>
                <p>You already have account ? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
}

export default Register;