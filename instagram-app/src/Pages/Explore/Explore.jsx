import React from 'react'
import './Explore.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Explorepost from '../../Components/ExplorePost/ExplorePost'
import { PostExplore } from '../../Components/data'

function Explore() {
  return (
    <div>
    <div>
        <div className="homesubcontainer">
            <div className="homesidebar">
                <Sidebar/>
            </div>
            <div className="Explorerightbar">
                {PostExplore.map((item) =>(
                <Explorepost item={item}/>
               ))}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Explore;