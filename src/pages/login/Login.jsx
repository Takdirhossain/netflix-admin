import { useContext, useEffect } from "react";
import { useState } from "react";
import login from "../../context/authContext/apiCalles";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css"
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {dispatch, isFetching, state} = useContext(AuthContext)
    const handaleLogin = (e) => {
e.preventDefault()
login({email, password}, dispatch)
}

    return (
        <div className="login">
        <form className="loginForm">
          <input
            type="text"
            placeholder="email"
            className="loginInput"
           onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="loginInput"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="loginButton"
          onClick={handaleLogin}
          >
            Login
          </button>
        </form>
      </div>
    );
};

export default Login;