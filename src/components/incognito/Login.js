// import React from 'react'
// import firebase from 'firebase';
// import { useState ,useContext} from 'react';
// import {useHistory, useNavigate} from 'react-router'
// import { Link } from 'react-router-dom';

// import { AuthContext,firebseContext } from '../../store/firebasecontext';

// function Login() {

//     const navigate = useNavigate();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//   const {Firebase}  = useContext(firebseContext);

//   const handleSubmit = (e)=>{
//       e.preventDefault();
//       Firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
//           navigate("/")
//       }).catch((error)=>{
//           console.log(error.message)
//       })
//   }


//     return (
//         <div className="login">
 
//  Login
//         <div className="login__box">
//             <form action="">

//             <label htmlFor="fname">Email</label>
//           <br />
//           <input
//             className="input"
//             type="email"
//             id="fname"
//             id="fname"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             name="email"
//             defaultValue=""
//           />


// <label htmlFor="lname">Password</label>
//           <br />
//           <input
//             className="input"
//             type="password"
//             id="lname"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             name="password"
//             defaultValue=""
//           />

//           <button onSubmit={handleSubmit} type="submit">Login</button>



          
//             </form>
// <Link to="/signup"> <button type="submit"> Signup </button></Link>

//         </div>
            
//         </div>
//     )
// }

// export default Login;


import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext, firebseContext } from "../../store/firebasecontext";

function Login() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { Firebase } = useContext(firebseContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      
      .then(() => {
        window.location.href = "/"
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div>
      <div className="login">
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          
          <input
            className="input"
            type="email"
            id="fname"
            id="fname"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            defaultValue=""
          />
          
          <label htmlFor="lname">Password</label>
          
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            defaultValue=""
          />
          
          <button onClick={handleSubmit}>Login</button>
         
        </form>
        <Link to="/signup"><button>Signup</button></Link>
        
        
      </div>
    </div>
  );
}

export default Login;
