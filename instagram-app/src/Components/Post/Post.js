import React, {useState} from 'react'
import './Post.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Likeicon from '../../images/love.svg';
import Comment from '../../images/comment.svg';
import Share from '../../images/share.svg';
import Save from '../../images/save.svg';
import Unlike from '../../images/heart.png';
import Smiley from '../../images/smileyicon.png';
import Modal from "react-modal"

const Post = (item) => {

  const [modalIsOpen,setmodalIsOpen] =useState(false);

  const [Like, SetLike] = useState(Likeicon);
  
  const handleShowmodal = () => {
    setmodalIsOpen(true);
   }

  const handleLike = () => {
    if(Like === Likeicon){
    SetLike(Unlike)
  }else{
    SetLike(Likeicon)
  }
}

const [comments, setComments] = useState([]);
const [commentwriting, setCommentWriting] = useState('');
 
console.log(commentwriting);

const AddComment =async()=>{
  const comment={
    "postid":"7823131",
    "username":"Saish",
    "comment":`${commentwriting}`,
    "profile":"https://images.unsplash.com/photo-1608155686393-8fdd966d784d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }

  setComments(comments.concat(comment))

}

const handleComment = () => {
  AddComment();
 };


console.log(comments);


return (
    <div style={{ marginLeft:'220px' , width:"450px", marginTop:"20px"}}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div style={{ display:'flex', alignItems:'center',paddingBottom:"10px",paddingTop:"10px" }}>
          <img src="https://images.unsplash.com/photo-1608155686393-8fdd966d784d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{ width:'35px', height:"35px", borderRadius:"50%", objectFit:"cover"}} alt="" />
          <p style={{  paddingLeft:"10px" }}>Zuck</p>
        </div>
        <div>
          <MoreHorizIcon/>
        </div>
      </div>

    <Modal 
    style={{ overlay: {backgroundColor:'rgba(0,0,0,0.8)'} }}
    isOpen={modalIsOpen}
    onRequestClose={() =>setmodalIsOpen(false)}
    className="modalForPost" >
    <div style={{ display:'flex' }}>
    <div style={{flex:1 }}>
    <img src={item?.item?.postimage} className="imgForPost" alt="" />
    </div>
      <div style={{ flex:1, height:"70vh" }}>
        <div style={{ height:"65vh",overflow:'hidden'}}>
          <div style={{ display:'flex', alignItems:"center", justifyContent:'space-between',padding:'10px 0px',borderBottom:'1px solid #A8A8A8' }}>
          <div style={{ display:'flex', alignItems:"center"}}>   
          <img src='https://images.unsplash.com/photo-1608155686393-8fdd966d784d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' style={{ width:'40px', height:"40px", borderRadius:"50%", objectFit:"cover"}} alt=''/>  
             <div style={{ paddingLeft:15 }}>
                <p style={{ marginBottom:16 }}>Saish</p>
                <p style={{ marginTop:-20 }}>Gaonkar</p>
             </div>
             </div>
             <div>
             <MoreHorizIcon/>
             </div>
          </div>

          <div style={{ height:'58vh',overflow:'auto' }} className='scrollable-div'>
          {comments.map((item) => (

         
          <div style={{ display:'flex', alignItems:'center',marginLeft:5 }}>
          <img src='https://images.unsplash.com/photo-1608155686393-8fdd966d784d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='postusericon' alt=''/>  
          <div style={{ marginLeft:25 }}>
            <p style={{ marginTop:40 }}>{item.username}</p>
            <p >{item.comment}</p>
            <p style={{ color:"#A8A8A8",marginTop:8 }}>1d</p>
            </div>
          </div>
 ))}
          <div style={{ display:'flex', alignItems:'center',marginLeft:5 }}>
          <img src='https://images.unsplash.com/photo-1608155686393-8fdd966d784d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' style={{ width:'40px', height:"40px", borderRadius:"50%", objectFit:"cover", marginTop:-75}} alt=''/>  
          <div style={{ marginLeft:25 }}>
            <p style={{ marginTop:40 }}>Narayan</p>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deserunt, deleniti quam fuga dolor accusantium porro ipsa amet excepturi doloribus labore corrupti sapiente veniam blanditiis sequi consequuntur unde non minima?</p>
            <p style={{ color:"#A8A8A8",marginTop:8 }}>1d</p>
            </div>
          </div>

          <div style={{ display:'flex', alignItems:'center',marginLeft:5 }}>
          <img src='https://images.unsplash.com/photo-1608155686393-8fdd966d784d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' style={{ width:'40px', height:"40px",position:'static', borderRadius:"50%", objectFit:"cover", marginTop:-75}} alt=''/>  
          <div style={{ marginLeft:25 }}>
            <p style={{ marginTop:40 }}>Narayan</p>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deserunt, deleniti quam fuga dolor accusantium porro ipsa amet excepturi doloribus labore corrupti sapiente veniam blanditiis sequi consequuntur unde non minima?</p>
            <p style={{ color:"#A8A8A8",marginTop:8 }}>1d</p>
            </div>
          </div>

          <div style={{ display:'flex', alignItems:'center',marginLeft:5 }}>
          <img src='https://images.unsplash.com/photo-1608155686393-8fdd966d784d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' style={{ width:'40px', height:"40px", borderRadius:"50%", objectFit:"cover", marginTop:-75}} alt=''/>  
          <div style={{ marginLeft:25 }}>
            <p style={{ marginTop:40 }}>Narayan</p>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deserunt, deleniti quam fuga dolor accusantium porro ipsa amet excepturi doloribus labore corrupti sapiente veniam blanditiis sequi consequuntur unde non minima?</p>
            <p style={{ color:"#A8A8A8",marginTop:8 }}>1d</p>
            </div>
          </div>


          <div style={{ display:'flex', alignItems:'center',marginLeft:5 }}>
          <img src='https://images.unsplash.com/photo-1608155686393-8fdd966d784d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' style={{ width:'40px', height:"40px",position:'static', borderRadius:"50%", objectFit:"cover", marginTop:-75}} alt=''/>  
          <div style={{ marginLeft:25 }}>
            <p style={{ marginTop:40 }}>Narayan</p>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deserunt, deleniti quam fuga dolor accusantium porro ipsa amet excepturi doloribus labore corrupti sapiente veniam blanditiis sequi consequuntur unde non minima?</p>
            <p style={{ color:"#A8A8A8",marginTop:8 }}>1d</p>
            </div>
          </div>

          <div style={{ display:'flex', alignItems:'center',marginLeft:5 }}>
          <img src='https://images.unsplash.com/photo-1608155686393-8fdd966d784d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' style={{ width:'40px', height:"40px", borderRadius:"50%", objectFit:"cover", marginTop:-75}} alt=''/>  
          <div style={{ marginLeft:25 }}>
            <p style={{ marginTop:40 }}>Narayan</p>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deserunt, deleniti quam fuga dolor accusantium porro ipsa amet excepturi doloribus labore corrupti sapiente veniam blanditiis sequi consequuntur unde non minima?</p>
            <p style={{ color:"#A8A8A8",marginTop:8 }}>1d</p>
            </div>
          </div>


         

          </div>
        </div>

        <div style={{ marginLeft:14,borderTop:'0.5px solid #A8A8A8' }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignContent:'center' }}>
                <div style={{ marginTop:5, marginLeft:-14 }}>
                  <img src={Like}  onClick={handleLike} alt=''  className='logoforpost'/> 
                  <img src={Comment} alt='' className='logoforpost'/>
                  <img src={Share} alt='' className='logoforpost'/>
                </div>
                <div style={{ marginTop:5 }}>
                  <img src={Save} alt='' className='logoforpost'/>
                </div>
            </div>
            <p style={{ fontWeight:600 ,marginTop:'-5px' }}>98,429 likes</p>
            <p style={{ fontWeight:500,fontSize:'12px' ,color:'#A8A8A8' }}>NOVEMBER 15</p>
        </div>
        <div style={{ marginTop:'auto', display:'flex', justifyContent:'space-between' }}>
       <div style={{ flex:0.2}}>
          <img src={Smiley} alt='' className='logoforpost'/>
       </div>
     
        <div style={{ flex:4,marginTop:15}}>
            <textarea type='text' placeholder='Add a comment...' style={{ resize:' none',width:"345px", height:'auto',border:'none', outline:'none', fontSize:'18px',color:'#A8A8A8'}} onChange={(e) => setCommentWriting(e.target.value)} />
        </div>
        <div style={{ flex:0.3 ,width:'100%',marginTop:12 }} onClick={handleComment} > 
        <p style={{ cursor:'pointer',marginLeft:'-10px',color:'#0095f6',fontWeight:'600' }}>Post</p>
        </div>
      </div>
      </div>
      </div>
    </Modal>

      <img src={item?.item?.postimage} alt='' style={{ width:'450px', height:"600px", objectFit:"contain", background:"black" }} />
      <div style={{ display:"flex" , alignItems:"center", justifyContent:"space-between" }}>
      <div style={{ display:"flex" , alignItems:"center", justifyContent:"space-between"  }}>
        <div onClick={handleLike}>
          <img src={Like} alt=''  className='logoforpost'/>
        </div>
        <div onClick={handleShowmodal} style={{ cursor:'pointer' }}>
         <img src={Comment} alt='' className='logoforpost'/>
        </div>
        <img src={Share} alt='' className='logoforpost'/>
      </div>
      <div style={{ display:"flex" , alignItems:"center" }}>
      <img src={Save} alt='' className='logoforpost'/>
      </div>

      </div>
      <p style={{display:"flex", fontWeight:"600",fontSize:"14px",marginTop:"0"  }}>147,284 likes</p>
      <p style={{fontSize:"14px", marginTop:"5px" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid molestiae laboriosam nesciunt obcaecati quaerat, nostrum rem, repudiandae, ea delectus maiores incidunt at assumenda dolore! Eaque voluptatibus hic perspiciatis deleniti...</p>
      <div onClick={handleShowmodal} style={{ cursor:"pointer" }}>
        <p style={{ color:"#A8A8A8", fontSize:"16px", marginTop:"5px" }}>View all 3,250 comments</p>
      </div>
    </div>
  )
}

export default Post

// import {Avatar} from "@mui/material";
// import love  from "../../images/love.svg"
// import comment from "../../images/comment.svg"
// import share from "../../images/share.svg"

// class Post extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             commentList:[]
//         };
//     };

//     componentDidMount() {
//         this.getComments();
//     }

//     getComments=() => {
//         let data =[
//             {
//                 username: "Nehal",
//                 "commentId" : "1234",
//                 "timeStamp" : "123456",
//                 "description" : "This is my comment"
//             },
//             {
//                 username: "Avinash",
//                 "commentId" : "1234",
//                 "timeStamp" : "123456",
//                 "description" : "This is my comment"
//             },
//             {
//                 username: "Sumit",
//                 "commentId" : "1234",
//                 "timeStamp" : "123456",
//                 "description" : "This is my comment"
//             },
//             {
//                 username: "Omkar",
//                 "commentId" : "1234",
//                 "timeStamp" : "123456",
//                 "description" : "This is my comment"
//             },
//             {
//                 username: "Tejas",
//                 "commentId" : "1234",
//                 "timeStamp" : "123456",
//                 "description" : "This is my comment"
//             },
//             {
//                 username: "Amit",
//                 "commentId" : "1234",
//                 "timeStamp" : "123456",
//                 "description" : "This is my comment"
//             },

//         ];
//         this.setState({commentList:data});
//     }
//     render(){
//         return(
//             <div className="post_container">
              
//             <div className="postHeader">
//             <Avatar className="post_image"/>
//             <div className="post_username">
//             {
//                 this.props.userName
//             }
//             </div>
//             </div>
            
//             <div className="image">
//             <img src={this.props.postImage} alt="post image" />
//             </div>
            
//             <div>
//             <div style={{ "marginLeft":"10px" }}>
//             <img src={love} alt="post_reactimage" />
//             <img src={comment} alt="post_reactimage" />
//             <img src={share} alt="post_reactimage" />
//             </div>

//             <div style={{ "fontWeight":"bold","marginLeft":"20px" }}>
//             {this.props.likes} likes
//             </div>

//             <div>
//             {
//                 this.state.commentList.map((item,index)=>{
//                     <div className="post_comment">
//                     {item.description}
//                     </div>
//                 })
//             }
//             <input type="text" className="post_commentbox" placeholder="Add a comment"/>
//             </div>




//             </div>
//             </div>


//         )
//     }
// }

// export default Post

