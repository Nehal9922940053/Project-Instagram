import React, {useState} from "react";
import './SignupPage.css';
import {Grid} from "@mui/material"
import ig_logo from "../../images/logoinsta.png"
import appstore from "../../images/app.png";
import playstore from "../../images/play.png";
import facebook from"../../images/facebook.png";

import { firebaseAuth } from "../../Utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const SignupPage = () => {
  const navigate = useNavigate();

  const [formValues,setFormValues] = useState({
    email: "",
    fullname:"",
    username:"",
    password:"",
  });

  const handleSignIn = async (e) => {
    e.preventDefault();
    try{
      const {email,password} = formValues;
      await createUserWithEmailAndPassword(firebaseAuth,email,password);
    }catch(error){
      console.log(error,"Error while handling sign in");
    }
  }

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    // if(currentUser) navigate('/')
  }) 


        return (
            <div>
            <Grid container>
            <Grid item xs={3}>
            Hello
            </Grid>
            <Grid item xs={6}>
            <div className="main_signuppage">
            <div className="maincomponent_signuppage">
            <img src={ig_logo} alt="Instagram Logo" className="logo_signuppage"/>   
            <div className="signup">
            Sign up to see photos and videos from your friends.
            </div>
             <button className="btn"> <img src={facebook} alt="Login with facebook"/>Log in with Facebook</button>

             <div className="or_container">
             <div className="or_divider"></div>
             <div  className="or">OR</div>
             <div  className="or_divider"></div>
            </div>

            <div className="form">
            <input type="email"  className="inp" id="email" placeholder="Mobile Number or Email" name="email"
            value={formValues.email} 
            onChange={(e)=>
            setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
            })}
            />
            <input type="text"  className="inp" placeholder="Full Name" name="fullname" 
            value={formValues.fullname} 
            onChange={(e)=>
            setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
            })}
            />
            <input type="text"  className="inp" placeholder="Username" name="username" 
            value={formValues.username} 
            onChange={(e)=>
            setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
            })}
            
            />
            <input type="password" className="inp" placeholder="Password" name="password" 
            value={formValues.password} 
            onChange={(e) =>
            setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
            })}/>

            <div className="learn_more">
            People who use our service may have uploaded your contact information to Instagram. <a href="">Learn More</a>
            </div>
            <div className="privacy_policy">
            By signing up, you agree to our <a href="">Terms , Privacy Policy</a> and  <a href="">Cookies Policy.</a>
            </div>
            <button className="btn" onClick={(e)=>handleSignIn(e)}>Sign up</button>
            </div>
              
              <div className="maincomponent_loginlink">
            <div className="signup_login_opt">
               <div className="have_acct">
               Have an account? <span><a onClick={()=>navigate("/login")}>Log in</a></span>
               </div>

            
            </div>
            </div>

            <div className="downloadapp">
            <div className="get_app">Get the app</div>
            <div className="apps">
            <img src={appstore} alt="App store" />
            <img src={playstore} alt="App store" />
            </div>
            
            </div>

         </div>
            </div>  
            
            </Grid>
            
            
            <Grid item xs={3}>
            Narvekar
            </Grid>
            </Grid>
            </div>
        );
    }


export default SignupPage;
