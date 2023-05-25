import { Link } from "react-router-dom";
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        {/* <div className="left">
          <h1>Welcome to</h1>
          <img src={require('./images/download.png')} alt="" />
          <button>Register</button>
        </div> */}
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />   
            <input type="email" placeholder="Email" />                     
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />           
            <p>Already have an account? <Link to="/login">Login!</Link></p> 
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;