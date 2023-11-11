import React, {Component} from "react";
import "./Home.css"
import {Grid} from "@mui/material"
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import MainContent from "../MainContent/MainContent";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div>
            <Grid container>
            <Grid item xs={1} className="sidebar">
            <Sidebar/>
            </Grid>
            <Grid item xs={3}>
   
            </Grid>
          
            </Grid>
            </div>
        )
    }
}

export default Home;