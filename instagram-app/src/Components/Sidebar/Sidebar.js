import React, { useState } from 'react'
import "./Sidebar.css"
// import { SidebarData } from './SidebarData'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import searchicon from '../../images/search-icon.png';
import exploreicon from '../../images/explore.svg' 

import reels from '../../images/reelsicon.png'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import messages from '../../images/message.svg'
import thread_icon from '../../images/threads-icon.png';
import ig_logo from "../../images/logoinsta.png"
import Mediaicon from "../../images/mediaicon.png";
import InstagramIcon from "../../images/Instagram.png";
import Proileicon from '../../images/profileicon.jpg';
import Modal from "react-modal";
import { Link } from 'react-router-dom';
import { Profiledata } from '../data';


const Sidebar = () => {

  const [modalIsOpen ,setmodalIsOpen] = useState(false);

  
  const handleShowmodal =() => {
    setmodalIsOpen(true);
  }

  const [file ,setFile] = useState(null);
  const [imagepre ,setImagepre] = useState(null);

  const [ShowSearch, setShowSearch] = useState(true);

  const toggleSearchText=()=>{
    setShowSearch(!ShowSearch);
  }

  const [isBorderHidden, setIsBorderHidden] = useState(false);

  const handleClick = () => {
    setIsBorderHidden(!isBorderHidden);
  };



  return (
    <div className={`mainsidebar ${isBorderHidden ? 'hide-border' : ''}`} >

    <Modal 
    style={{ overlay: {backgroundColor:'rgba(0,0,0,0.8)'} }}
    isOpen={modalIsOpen}
    onRequestClose={() =>setmodalIsOpen(false)}
    className="modalForPost" >
      <div style={{ flex:1, height:"70vh" }}>
      {imagepre == null ?

      <div>
          <p style={{ display:'flex', alignItems:'center',margin:'auto',justifyContent:'center', fontWeight:600, marginTop:10 }}>Create new post</p>
          <div style={{ display:'flex',alignItems:'center',margin:'auto',justifyContent:'center' }}>
          <div style={{ marginTop:240, marginLeft:100 }}>
          <img src={Mediaicon} style={{paddingBottom:15}} alt=''/>
          <p style={{ fontWeight:400, marginLeft:"-70px", fontSize:'20px' }}>Drag photos and videos here</p>
          <label htmlFor='file'>
          <div style={{backgroundColor:'#0095F6', padding:'5px', marginLeft:'-60px', borderRadius:4, marginTop:25, width:'205px'}}>
            <p style={{ color:'#ffffff',fontWeight:500, textAlign:'center' }}>Select from computer</p>
          </div>
         
           <input type="file" id='file' name='file' accept='image' style={{display:'none'}} onChange={(e)=>[setFile(e.target?.files[0]),setImagepre(URL.createObjectURL(e.target.files[0]))]}/>
          </label>
         
          </div>
          </div>
      </div>
      :
        <div style={{ height:'100%',width:'100%',overflow:"hidden" }}>
        <div style={{ display:'flex',height:'100%',width:'100%',overflow:"hidden"  }}>
          <img src={imagepre} style={{ width:"60%", height:"100vh",objectFit:'cover' }} alt=''/>
          <div style={{ marginLeft:20, width:'35%' }}>
              <div style={{display:'flex',alignItems:'center'  }}>
              <img src={Proileicon} style={{ width:40, height:40, borderRadius:'50% ', objectFit:'cover'}} alt=''/>
              <p style={{ marginLeft:10,fontWeight:600 }}> Nehal Narvekar</p>
              </div>
              <textarea type="text" name='text' id='text' placeholder='Write a caption...' multiple={true}  className='textinputforpost'/>
              <button type="submit" className='createpost'>
              Post
              </button>
              </div>
        
          </div>
        </div>
      }
      </div>
    </Modal>



    <div>
    
      <div style={{ display:'flex', marginTop:"30px", marginLeft:"20px" }}>
     {ShowSearch === false  ? <img src={InstagramIcon} style={{ height:'24px' , width:'24px' }}  alt=""/> : <img src={ig_logo} className="logos"  alt=""/>}
      </div>         
      <Link to={"/"} style={{ textDecoration:'none', color:'#000'}}> 
      <div style={{ display:"flex" , alignItems:"center", marginTop:"30px", cursor:"pointer", marginLeft:"20px" }}>
      <HomeIcon style={{ width:"30px", height:"30px" }} />
        {ShowSearch &&  <ul style={{ marginLeft:"15px" }}>
            <li className='listtext'>
              Home
            </li>
          </ul>}
      </div> 
      </Link>

      <div style={{ display:"flex" , alignItems:"center", marginTop:"30px", cursor:"pointer", marginLeft:"20px" }} onClick={toggleSearchText}>
      <img src={searchicon} alt='' className='searchicon' onClick={handleClick} />
      {ShowSearch && <ul style={{ marginLeft:"15px" }} onClick={handleClick}>
            <li className='listtext'>
              Search
            </li>
        </ul>}
      </div>
      <div style={{ display:"flex" , alignItems:"center", marginTop:"30px", cursor:"pointer", marginLeft:"20px" }} >
        <img src={exploreicon} alt='' className='exploreicon'/>
     <Link to={"/explore"} style={{ textDecoration:'none' }}>       
     {ShowSearch &&  <ul style={{ marginLeft:"15px" }}>
        <li className='listtext'>
              Explore
            </li>
        </ul>}
        </Link>
      </div>
      <div style={{ display:"flex" , alignItems:"center", marginTop:"30px" , cursor:"pointer", marginLeft:"20px"}}>
        <img src={reels} alt='' className='reels'/>
        {ShowSearch && <ul style={{ marginLeft:"15px" }}>
            <li className='listtext'>
              Reels
            </li>
        </ul>}
      </div>
      <div style={{ display:"flex" , alignItems:"center", marginTop:"30px", cursor:"pointer", marginLeft:"20px" }}>
        <img src={messages} alt='' className='message'/>
        {ShowSearch &&  <ul style={{ marginLeft:"15px" }}>
            <li className='listtext'>
              Messages
            </li>
        </ul>}
      </div>
      <div style={{ display:"flex" , alignItems:"center" , marginTop:"30px", cursor:"pointer", marginLeft:"20px"}}>
        <FavoriteBorderRoundedIcon style={{ width:"30px", height:"30px" }}/>
        {ShowSearch &&  <ul style={{ marginLeft:"15px" }}>
            <li className='listtext'>
              Notifications
            </li>
        </ul>}
      </div>
      <div style={{ display:"flex" , alignItems:"center", marginTop:"30px", cursor:"pointer", marginLeft:"20px" }} onClick={handleShowmodal}>
      <AddBoxOutlinedIcon style={{ width:"30px", height:"30px" }}/>
      {ShowSearch &&  <ul style={{ marginLeft:"15px" }}>
            <li className='listtext'>
              Create
            </li>
        </ul>}
      </div>

      <Link to={"/username"} style={{ textDecoration:'none' }}>
      <div style={{ display:"flex" , alignItems:"center", marginTop:"30px", cursor:"pointer", marginLeft:"20px" }}>
      <img src={"https://images.unsplash.com/photo-1608155686393-8fdd966d784d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='' className='profileicon'/>
      {ShowSearch &&  <ul style={{ marginLeft:"15px" }}>
            <li className='listtext'>
            <Link to={"/username"} style={{ textDecoration:'none',color:'#000' }}>  
              Profile
              </Link>
            </li>
        </ul>}
      </div>
      </Link>
 
   <div className='threadandmore'>
   <div style={{ display:"flex" , alignItems:"center", marginTop:"30px", cursor:"pointer", marginLeft:"20px" }}>
   <img src={thread_icon} alt='' className='threads'/>
   {ShowSearch && <ul style={{ marginLeft:"15px" }}>
         <li className='listtext'>
          Threads
         </li>
     </ul>}
   </div>
   <div style={{ display:"flex" , alignItems:"center", marginTop:"30px", cursor:"pointer", marginLeft:"20px" }}>
   <MenuIcon style={{ width:"30px", height:"30px" }}/>
   {ShowSearch && <ul style={{ marginLeft:"15px" }}>
         <li className='listtext'>
          Menu
         </li>
     </ul>}
   </div>
   </div>
    </div>

    {!ShowSearch && 
      <div className='searchbar'>
      <p style={{ fontWeight:600,fontSize:27,marginLeft:15, marginTop:35 }}>Search</p>
      <div className='subSearchbar'>
     {/*
      <div className='closebar' >
      <CloseIcon className='closeicon' />
      </div>
    */}

      <img src={searchicon} alt='' className='searchiconbar'/>
      <input type="search"  className='showsearchinput' name='text' placeholder='Search'/>
      </div>
      <p style={{ marginLeft:10, fontWeight:600, fontSize:18}}>Recent</p>

      <div style={{ height: '77vh' ,overflow:'auto' }}>
     {Profiledata?.map((item) =>(
      <div style={{display:"flex" , alignItems:"center" ,marginLeft:10, marginTop:20 }}>
        <img src={item.profile} style={{ width:'40px', height:"40px",borderRadius:'50%', objectFit:'cover'}} alt=''/>
        <div style={{ marginLeft:10 }}>
          <p style={{ marginTop:0 ,fontSize:14}}>{item.name}</p>  
          <p style={{ marginTop:0, color:'#878787' }}>{item.email}</p>       
        </div>
      </div>
      ))}

  



      </div>
      </div>
    }
    </div>
  )
}

export default Sidebar
/*
 <div className='Sidebar'>
    <ul className='SidebarList'>
    <li className='logo'>
    <img src={ig_logo} alt="Instagram Logo" className="logo_loginpage"/>   
    </li>
    {SidebarData.map((val,key)=>{
        return(
            <li key={key} className='row' onClick={()=>{window.location.pathname=val.link;}}>
            {" "}
            <div id='icon'>{val.icon}</div><div id='title'>{val.title}</div>
            </li>
        );
        
        })}
        <li className='more'>
        <div id='icon'><MenuIcon/></div><div id='title'>More</div>
        </li>
        </ul>
       
        </div>
        */