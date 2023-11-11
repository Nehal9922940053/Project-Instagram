import React, {Component} from "react";
import "./MainContent.css"
import {Grid} from "@mui/material";
import StatusBar from "../StatusBar/StatusBar";

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div>
            <Grid container>
            
            <Grid item xs={2}>
            
            </Grid>

            <Grid item xs={6} className="mainContent">
            <div>
            <StatusBar/>
            </div>
            </Grid>
           
            <Grid item xs={2}></Grid>

            <Grid item xs={2}></Grid>
            

            </Grid>
            </div>
        )
    }
}
export default MainContent;