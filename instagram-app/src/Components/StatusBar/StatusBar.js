import React, {Component} from "react";
import "./StatusBar.css"
import StatusImg from "../../images/profile.png"
import {Avatar} from "@mui/material";


class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    //execute the react code when the component is placed in a DOM
    componentDidMount(){
        this.getData();
    }

    getData(){
        let data = [
            {
                " userName" : "Nehal",
                " imageURL" : ""
            },
            {
                " userName" : "Avinash",
                " imageURL" : "https://www.linkedin.com/in/nehal-narvekar-4901551aa/"
            },
            {
                " userName" : "Tejas",
                " imageURL" : "https://www.linkedin.com/in/nehal-narvekar-4901551aa/"
            },
            {
                " userName" : "Aditya",
                " imageURL" : "https://www.linkedin.com/in/nehal-narvekar-4901551aa/"
            },
            {
                " userName" : "sumit",
                " imageURL" : "https://www.linkedin.com/in/nehal-narvekar-4901551aa/"
            },
            {
                " userName" : "omkar",
                " imageURL" : "https://www.linkedin.com/in/nehal-narvekar-4901551aa/"
            },
        ]
        this.setState({statusList: data});
    }

    render(){
        return(
            <div>
            <div className="status_container">
            {/*
                this.state.statusList.map((item,index)=>{
                    <div className="status">
                    <Avatar className="statusbar_status" src={StatusImg}/>
                    <div className="statusbar_text">
                    {item.userName}
                    </div>
                    </div>
                })
            */ }
            </div>
            </div>
        )
    }
}

export default StatusBar;