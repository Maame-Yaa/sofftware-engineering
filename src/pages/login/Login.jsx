import { Link } from "react-router-dom"
import "./login.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };


  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome to</h1>
          <img src={require('./images/download.png')} alt="" />
          <Link to="./register" style={{textDecoration: "none"}}>
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />            
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login