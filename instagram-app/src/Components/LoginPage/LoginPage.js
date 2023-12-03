import React, {useState} from "react";
import './LoginPage.css';
import {Grid} from "@mui/material"
import ig_login_img from "../../images/login.svg"
import ig_logo from "../../images/logoinsta.png"
import fb from "../../images/fb.png";
import appstore from "../../images/app.png";
import playstore from "../../images/play.png";
import Footer from "../Footer/Footer"
import  {signInWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";
import {firebaseAuth} from "../../Utils/firebase-config";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  
  const [formValues, setFormValues] = useState(
    {
      email: "", 
      password: "",
    }

  );

const handleLogIn = async () => {
  // console.log(formValues);
  // e.preventDefault();

  try {
    const {email,password} = formValues;
    await signInWithEmailAndPassword(firebaseAuth, email, password)
  } catch (error) {
    console.log(error);
  }

}

onAuthStateChanged(firebaseAuth, (currentUser)=>{
  // if(currentUser) navigate("/signup");
})
        return (
          <div className="loginpage">
          <div className="main_loginpage">
          {/*<div>
            <img src={ig_login_img} alt="Instagram Login"  className="left_mob_image" width="350" />
        </div>*/}
           <div className="rightcomponent_loginpage">
           <img src={ig_logo} alt="Instagram Logo" className="logo_loginpage"/>   
           <div className="form">
           <input type="email"  className="inp" name="email"
           placeholder="Phone number, username, or  email"  
           value={formValues.email} 
           onChange={(e)=>
           setFormValues({
             ...formValues,
             [e.target.name]: e.target.value,
           })}
           />

         <input type='password' className="inp" name='password' id='password' placeholder='Password'    
           value={formValues.password}       
           onChange={(e)=>
           setFormValues({
           ...formValues,
           [e.target.name]: e.target.value,
           })}
           />     
          
<button className="btn" onClick={handleLogIn}>Sign In</button>
</div>
          
            <div className="or_container">
               <div className="or_divider"></div>
               <div  className="or">OR</div>
               <div  className="or_divider"></div>
            </div>

           <div className="login_fb">
           <img src={fb} alt="Login with facebook"/>
           <span>
           <a className="fb_link">Log in with Facebook</a>
           </span>
           </div> 
            <div className="forgot_pass">
           <a>Forgot password?</a>
           </div>
           
         
           
           <div className="rightcomponent_signuplink">

            <div className="signin_login_opt">
               <div className="dnt_acct">
               Don't have an account? <span><a onClick={()=> navigate("/signup")}>Sign up</a></span>
               </div> 
            </div>
        </div> 
    
       <div className="rightcomponent_downloadlink">
           <div className="downloadapp">
           <div className="get_app">Get the app.</div>
           <div className="apps">
           <img src={appstore} alt="App store" />
           <img src={playstore} alt="App store" />
           </div>
           
           </div>
            </div>
           </div>
            </div>
            <Footer/> 
           </div>

            )
          }

      
    

export default  LoginPage;




{/* <div>
<Grid container>
<Grid item xs={3}>
Hello
</Grid>



<Grid item xs={6}>
<div className="main_loginpage">
<div>
 <img src={ig_login_img} alt="Instagram Login"  className="left_mob_image" width="350" />
</div>
<div className="rightcomponent_loginpage">
<img src={ig_logo} alt="Instagram Logo" className="logo_loginpage"/>   



<div className="form">
<input type="email"  className="inp" name="email"
placeholder="Phone number, username, or  email"  
value={formValues.email} 
onChange={(e)=>
setFormValues({
  ...formValues,
  [e.target.name]: e.target.value,
})}
/>

<input type='password' className="inp" name='password' id='password' placeholder='Password'    
value={formValues.password}       
onChange={(e)=>
setFormValues({
...formValues,
[e.target.name]: e.target.value,
})}
/>     

<button className="btn" onClick={handleLogIn}>Sign In</button>
</div>

<div className="or_container">
    <div className="or_divider"></div>
    <div  className="or">OR</div>
    <div  className="or_divider"></div>
</div>
<div className="login_fb">

<img src={fb} alt="Login with facebook"/>
<span>
<a className="fb_link">Log in with Facebook</a>
</span>
</div> 
 <div className="forgot_pass">
<a>Forgot password?</a>
</div>



<div className="rightcomponent_signuplink">

 <div className="signin_login_opt">
    <div className="dnt_acct">
    Don't have an account? <span><a onClick={()=> navigate("/signup")}>Sign up</a></span>
    </div> 
 </div>
</div> 

<div className="rightcomponent_downloadlink">
<div className="downloadapp">
<div className="get_app">Get the app</div>
<div className="apps">
<img src={appstore} alt="App store" />
<img src={playstore} alt="App store" />
</div>

</div>
</div>
</div>
</div> 

</Grid>


<Grid item xs={3}>
Narvekar
</Grid>
</Grid>
</div> */}