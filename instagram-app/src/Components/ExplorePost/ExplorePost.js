import React, {useState} from 'react'
import './ExplorePost.css'
import Favourite from '../../images/explorelove.png';
import Comment from '../../images/explorecomment.png';
import Unlike from '../../images/heart.png';
import Likeicon from '../../images/love.svg';
import PostComment from '../../images/comment.svg';
import Share from '../../images/share.svg';
import Save from '../../images/save.svg';
import Smiley from '../../images/smileyicon.png';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Modal from "react-modal"
import { PostExplore } from '../data';

const ExplorePost = (item) => {

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

  return (
    <div className='container' onClick={handleShowmodal}>
        <div className='imagefor'>
        <img src={item?.item?.postimage} className='imageforexplore' alt=''/>
        <div className='text'>
            <div style={{ display:'flex', alignItems:'center', marginLeft:'10px' }}>
            <img src={Favourite} className='logoforexplorepost' alt=''/>
            <p style={{fontWeight:800,fontSize:'16px', color:'#fff' }}>{item?.item?.likes}</p>
        </div>
        <div style={{ display:'flex', alignItems:'center', marginLeft:'10px' }}>
            <img src={Comment} className='logoforexplorepost' alt=''/>
            <p style={{fontWeight:800, fontSize:'16px', color:'#fff' }}>{item?.item?.comments}</p>
        </div>
        </div>
        </div>

        <Modal 
        style={{ overlay: {backgroundColor:'rgba(0,0,0,0.8)'} }}
        isOpen={modalIsOpen}
        onRequestClose={() =>setmodalIsOpen(false)}
        className="modalForPost" >

        <div style={{ display:'flex' }}>
        <div style={{ height:"auto", width:"50%" }}>
        <img src={item?.item?.postimage} className="imgForPost" alt="" />
        </div>
        
          <div style={{ flex:1, height:"70vh" }}>
            <div style={{ height:"65vh",overflow:'hidden' }}>
              <div style={{ display:'flex', alignItems:"center", justifyContent:'space-between',borderBottom:'1px solid #A8A8A8'  }}>
              <div style={{ display:'flex', alignItems:"center",padding:'10px 0px'}}>   
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
    
              <div style={{ height:'58vh',overflow:'auto' }}>
    
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
    
            <div style={{ marginLeft:14, borderTop:'0.5px solid #A8A8A8' }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignContent:'center' }}>
                    <div style={{ marginTop:5, marginLeft:-14 }}>
                      <img src={Like}  onClick={handleLike} alt=''  className='logoforpost'/> 
                      <img src={PostComment} alt='' className='logoforpost'/>
                      <img src={Share} alt='' className='logoforpost'/>
                    </div>
                    <div style={{ marginTop:5 }}>
                      <img src={Save} alt='' className='logoforpost'/>
                    </div>
                </div>
                <p style={{ fontWeight:600,marginTop:'-8px' }}>98,429 likes</p>
                <p style={{ fontWeight:500,fontSize:'12px' ,color:'#A8A8A8' }}>NOVEMBER 15</p>
            </div>
            <div style={{ marginTop:' auto', display:'flex', justifyContent:'space-between' }}>
           <div style={{ flex:0.2}}>
              <img src={Smiley} alt='' className='logoforpost'/>
           </div>
         
            <div style={{ flex:4,marginTop:15}}>
                <textarea type='text' className='' placeholder='Add a comment...' style={{ resize:' none',width:"345px", height:'auto',border:'none', outline:'none', fontSize:'18px',color:'#A8A8A8'}}/>
            </div>
            <div style={{ flex:0.3 ,width:'100%',marginTop:12 }} > 
            <p style={{ cursor:'pointer',marginLeft:'-10px',color:'#0095f6',fontWeight:'600' }}>Post</p>
            </div>
          </div>
          </div>
          </div>
        </Modal>    
    </div>
  )
}

export default ExplorePost