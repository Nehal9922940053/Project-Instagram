import React from 'react'
import './Profile.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Options from '../../images/Options.png'
import ExplorePost from '../../Components/ExplorePost/ExplorePost'
import Footer from '../../Components/Footer/Footer'
import { PostExplore } from '../../Components/data'

const Profile = () => {
  return (
    <div>
      <div>
        <div className='homesubcontainer'>
            <div className='homesidebar'>
                <Sidebar/>
            </div>
            <div className='profilerightbar'>

            <div style={{ display:'flex', marginTop:-200, width:'850px',padding:'20px', height:'140px',borderBottom:'1px solid #D3d3d3',marginLeft:50 }} className='subProfilerightbar'>
              <div style={{ display:'flex', marginTop:-30, marginLeft:68 }}>
                <img src="https://images.pexels.com/photos/425202/pexels-photo-425202.jpeg" alt='' style={{ width:'150px', height:'150px', borderRadius:'50%',objectFit:'cover' }}/>
              </div>
              <div>
                <div style={{ display:'flex', alignItems:'center' }}>
                  <p style={{ marginLeft:80, marginTop:-20,fontSize:20}}>sahilnarvekar8</p>
                  <button style={{paddingLeft:20,marginLeft:25, paddingRight:20, paddingTop:6,paddingBottom:6,marginTop:-20,border:'none',backgroundColor:'#d3d3d3',fontSize:15 ,fontWeight:600 , borderRadius:'8px',cursor:'pointer'}}>Edit profile</button>
                  <button style={{paddingLeft:20,marginLeft:20, paddingRight:20, paddingTop:6,paddingBottom:6,marginTop:-20,border:'none',backgroundColor:'#d3d3d3',fontSize:15 ,fontWeight:600 , borderRadius:'8px',cursor:'pointer'}}>View Archive</button>
                  <img src={Options} style={{ width:'25px', height:'25px', borderRadius:'50%',objectFit:'cover',marginLeft:20 ,marginTop:-20,cursor:'pointer'}} alt=''/>
                </div>
                <div style={{ display:'flex', alignItems:'center',marginTop:40 }}>
                <p style={{ marginLeft:80, marginTop:-20,fontSize:17, fontWeight:500}}>1<p style={{ marginLeft:12,marginTop:-23, fontSize:18, fontWeight:400}}>post</p></p>
                <p style={{ marginLeft:50, marginTop:-20,fontSize:17, fontWeight:500}}>8<p style={{ marginLeft:14,marginTop:-23, fontSize:18, fontWeight:400}}>followers</p></p>
                <p style={{ marginLeft:50, marginTop:-20,fontSize:17, fontWeight:500}}>38<p style={{ marginLeft:24,marginTop:-23, fontSize:18, fontWeight:400}}>following</p></p>
               
              </div>
              <div style={{ display:'flex', alignItems:'center',marginTop:30 }}>
              <p style={{ marginLeft:80, marginTop:-16,fontSize:18,fontWeight:500}}>Sahil</p>
            </div>
                </div>
              </div>
              
            <div className='postContainerForProfile'>
            {PostExplore.map((item) =>(
                <ExplorePost item={item}/>
            ))}
          
           

            </div>
            <div className='footer'>
            <Footer/>
            </div>
            </div>
        </div>
       
      </div>
    </div>
  )
}

export default Profile