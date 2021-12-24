// import React from 'react'
// import { useState ,useContext } from 'react';
// import { useNavigate } from 'react-router';
// import { firebseContext } from '../../store/firebasecontext';
// import { useAuth } from '../../store/firebasecontext';
// function Signup() {

//     const navigate = useNavigate();
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [cpassword, setCpassword] = useState("");
//     const {Firebase} = useContext(firebseContext);
//     const {signup} = useAuth()
//     const [error,setError] = useState('')
//     const [loading,setLoading] = useState(false)
    
//     async function handleSubmit(e){
//         e.preventDefault();
        

//         if(cpassword.value !== password.value){
//           return setError('Passwords do not match')
//           setLoading(true)
//         }
//         try{

//          await signup(email,password).then(()=>{

//            navigate('/login')
//          })
//          setLoading(false)
//         }catch{
//           setError('failed to create account')
          
//         }



//         // Firebase.auth()
//         //   .createUserWithEmailAndPassword(email, password)
//         //   .then((result) => {
//         //     result.user.updateProfile({ displayName: username }).then(() => {
//         //       Firebase.firestore()
//         //         .collection("users")
//         //         .add({
//         //           id: result.user.uid,
//         //           username: username,
                  
//         //         })
//         //         .then(() => {
//         //          navigate("/login"); // redirects to login
//         //         });
//         //     });
//         //   });
//     }
    
//     return (
//         <div className="signup">
//         <div className="signup__box">

       
//             <form action="">



//             <label htmlFor="fname">Username</label>
//           <br />
//           <input
//             className="input"
//             type="text"
//             id="fname"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             name="name"
//             defaultValue=""
//           />




// <label htmlFor="fname">Email</label>
//           <br />
//           <input
//             className="input"
//             type="email"
//             id="fname"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             name="email"
//             defaultValue="John"
//           />



// <label htmlFor="lname">Password</label>
//           <br />
//           <input
//             className="input"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             id="lname"
//             name="password"
//             defaultValue="Doe"
//           />



// <label htmlFor="lname">Confirm Password</label>
//           <br />
//           <input
//             className="input"
//             type="password"
//             value={cpassword}
//             onChange={(e) => setCpassword(e.target.value)}
//             id="lname"
//             name="cpassword"
//             defaultValue="Doe"
//           />


// <button type="submit" disabled={loading} onSubmit={handleSubmit}>Signup</button>
//             </form>
//         </div>
           
//         {error && <h2>{error}</h2>}

//         </div>
//     )
// }

// export default Signup;

import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { firebseContext } from "../../store/firebasecontext";
import "../stylesheet/signup.css";
import signup_icon from "../images/signup_icon.png";


export default function Signup() {
  let nav = useNavigate();
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Firebase } = useContext(firebseContext);
  const [error,setError] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Firebase);
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: username }).then(() => {
          Firebase.firestore()
            .collection("users")
            .add({
              id: result.user.uid,
              username: username,
              phone: phone,
            })
            
        .then(() => {
            // window.location.href = "/";
            console.log('then');
           window.location.href = "/"
            }).catch((error)=>{
              alert(error.message)
            })
        });
      });
  };
  return (
   
      <div className="signup">
        <div className="signup-img">
        <img src={signup_icon} alt="new" />
        </div>
    <div className="signup-main">

        <form onSubmit={handleSubmit}>
          <div className="input_elements">
          
          <input
          placeholder="username"
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="name"
            defaultValue=""
          /> </div>
          
          <div className="input_elements">
         
         <input
         placeholder="Email"
           className="input"
           type="email"
           id="fname"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           name="email"
           defaultValue=""
         /> </div>
          <div className="input_elements">
          
          <input
          placeholder="phone"
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            defaultValue=""
          /> </div>
          <div className="input_elements">
          
          <input
          placeholder="password"
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue=""
          /></div>
          
          
          
          
         
          
          
        </form>
        <button className="btn" onClick={handleSubmit}>Signup</button>
        <Link to="/login"> <button className="btn" >Login</button>  </Link>
        </div>
      </div>
   
  );
}






