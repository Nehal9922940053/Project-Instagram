import React, {Component} from "react";
import "./Post.css"
import {Avatar} from "@mui/material";
import love  from "../../images/love.svg"
import comment from "../../images/comment.svg"
import share from "../../images/share.svg"

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            commentList:[]
        };
    };

    componentDidMount() {
        this.getComments();
    }

    getComments=() => {
        let data =[
            {
                username: "Nehal",
                "commentId" : "1234",
                "timeStamp" : "123456",
                "description" : "This is my comment"
            },
            {
                username: "Avinash",
                "commentId" : "1234",
                "timeStamp" : "123456",
                "description" : "This is my comment"
            },
            {
                username: "Sumit",
                "commentId" : "1234",
                "timeStamp" : "123456",
                "description" : "This is my comment"
            },
            {
                username: "Omkar",
                "commentId" : "1234",
                "timeStamp" : "123456",
                "description" : "This is my comment"
            },
            {
                username: "Tejas",
                "commentId" : "1234",
                "timeStamp" : "123456",
                "description" : "This is my comment"
            },
            {
                username: "Amit",
                "commentId" : "1234",
                "timeStamp" : "123456",
                "description" : "This is my comment"
            },

        ];
        this.setState({commentList:data});
    }
    render(){
        return(
            <div className="post_container">
              
            <div className="postHeader">
            <Avatar className="post_image"/>
            <div className="post_username">
            {
                this.props.userName
            }
            </div>
            </div>
            
            <div className="image">
            <img src={this.props.postImage} alt="post image" />
            </div>
            
            <div>
            <div style={{ "marginLeft":"10px" }}>
            <img src={love} alt="post_reactimage" />
            <img src={comment} alt="post_reactimage" />
            <img src={share} alt="post_reactimage" />
            </div>

            <div style={{ "fontWeight":"bold","marginLeft":"20px" }}>
            {this.props.likes} likes
            </div>

            <div>
            {
                this.state.commentList.map((item,index)=>{
                    <div className="post_comment">
                    {item.description}
                    </div>
                })
            }
            <input type="text" className="post_commentbox" placeholder="Add a comment"/>
            </div>




            </div>
            </div>


        )
    }
}

export default Post

