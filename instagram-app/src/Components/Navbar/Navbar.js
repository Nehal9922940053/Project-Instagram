import React from "react";
import "./Navbar.css"
import { Grid } from "@mui/material";
import ig_logo  from "../../images/logoinsta.png";
import Home from "../../images/home.svg";
import Message from "../../images/message.svg"
import ProfilePic from "../../images/profile.png"
import Search from "../../images/search.svg"
import Explore from "../../images/explore.svg" 
import Love from "../../images/love.svg"
import {Avatar} from "@mui/material";


const Navbar =()=> {
   

        return(
            
           
          //  {/* <div className="barcomponent">
          //   <Grid container>
          //   <Grid item xs={2}></Grid>
            
          //   <Grid item xs={3}>
          //   <img src={ig_logo} alt="Instagram" width="105px"/>
          //   </Grid>
           
          //   <Grid item xs={3}>
          //   <input type="text" className="searchbar" placeholder="Search"/>
          //   </Grid>
           
          //   <Grid item xs={3} style={{ "display":"flex "}}>
          //   <img src={Home} className="navbar_img" alt="Home" width="30px"/>
          //   <img src={Search} className="navbar_img" alt="Search" width="30px"/>
          //   <img src={Message} className="navbar_img" alt="Message" width="30px"/>
          //   <img src={Explore} className="navbar_img" alt="Explore" width="30px"/>
          //   <img src={Love}  className="navbar_img" alt="Love" width="30px"/> 
          // <Avatar src={ProfilePic} className="nav_img" style={{ "maxHeight":"25px","maxWidth":"25px" }}>

          //   </Avatar>
        
          //   {/* <img src={Notification} alt="Notification" width="25px"/>*/}
          //     {/* <img src={Create} alt="Create" width="25px"/>*/}
            
          //   </Grid>
            
          //   <Grid item xs={1}>
          //   {/*<img src={ProfilePic} alt="Home" width="25px"/>*/}
          //   </Grid>
            
          //   </Grid>
          //   </div>*/} 
          <div className="sidebar_wrapper">
          <img src={ig_logo} alt="Instagram" width="105px"/>
          </div>
        )
    }

export default Navbar;


