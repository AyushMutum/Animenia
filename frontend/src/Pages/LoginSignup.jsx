// import React, { useContext, useState } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import './CSS/LoginSignup.css'
// import cross_icon from '../Components/Assets/cross_icon.png'
// import axios from 'axios';

// const LoginSignup = ({setShowLogin}) => {
  
//   const {url, setToken} = useContext(ShopContext)

//   const [currState, setCurrState] = useState("Login")

//   // const [state,setState] = useState("Login");

//   const [data, setData] = useState({
//     name: "",
//     email:"",
//     password:""
//   })



//   const onChangeHandler = (event) => {
//      const name = event.target.name
//      const value = event.target.value
//      setData(data=> ({...data,[name]:value}))
//   }



//   const onLogin = async (event) => {
//     event.preventDefault()
//     let newUrl = url;
//     if(currState==="Login"){
//         newUrl += "/api/user/login"
//     }

//     else{
//       newUrl += "/api/user/register"
//     }

//     const response = await axios.post(newUrl, data);

//     if(response.data.success){
//       setToken(response.data.token)
//         localStorage.setItem("token", response.data.token)
//         setShowLogin(false)
//     }
//     else{
//       alert(response.data.message)
//     }

//   }




//   const signup = async () => {
   
//   }

//   return (
//     <div className="login-popup">
     
//      <form onSubmit={onLogin} className="login-popup-container">
//       <div className="login-popup-title">
//         <h2>{currState}</h2>
//         <img onClick={() =>setShowLogin(false)} src={cross_icon} alt="" />
//       </div>
//       <div className="login-popup-inputs">
//         {currState==="Login" ? <></> :  <input name="name" value={data.name} onChange={onChangeHandler} type="text" placeholder="Your name" required /> }
       
//         <input name="email" value={data.email} onChange={onChangeHandler} type="email" placeholder="Your email" required />
//         <input name="password" value={data.password} onChange={onChangeHandler} type="password" placeholder="password" required />
//       </div>
//       <button type="submit" >{currState === "Sign up" ? "Create an account" : "Login"}</button>
//       <div className="login-popup-condition">
//       <input type="checkbox" required/>
//           <p>By continuing, i agree to the terms of use & privacy policy.</p>
//       </div>
//       {currState==="Login" 
//       ?   <p>Create a new account? <span onClick={() => setCurrState("Sign up")}>Click here</span></p>
//       :    <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
//       }
    

//      </form>

//     </div>
//   );
// };

// export default LoginSignup;

import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import './CSS/LoginSignup.css';
import cross_icon from '../Components/Assets/cross_icon.png';
import axios from 'axios';

import { toast } from "react-toastify";

const LoginSignup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(ShopContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
        // toast.success("Login successful!");
      } else {
        alert(response.data.message);
        // toast.error(response.data.message);
      }
    } catch (error) {
      // console.error("Error logging in:", error);
  alert()("An error occurred. Please try again.")
      
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign up" && (
            <input
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">
          {currState === "Sign up" ? "Create an account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account? <span onClick={() => setCurrState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginSignup;

