import React from 'react'
import "./Sidebar.css"
import { SidebarData } from './SidebarData'
import MenuIcon from '@mui/icons-material/Menu';
import ig_logo from "../../images/logoinsta.png"

const Sidebar = () => {
  return (
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
  )
}

export default Sidebar