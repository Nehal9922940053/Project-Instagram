import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import MovieCreationRoundedIcon from '@mui/icons-material/MovieCreationRounded';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export const SidebarData = [
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:"/home"
    },
    {
        title:"Search",
        icon:<SearchIcon/>,
        link:"/home"
    },
    {
        title:"Explore",
        icon:<ExploreIcon/>,
        link:"/home"
    },
    {
        title:"Reels",
        icon:<MovieCreationRoundedIcon/>,
        link:"/home"
    },
    {
        title:"Messages",
        icon:<MapsUgcRoundedIcon/>,
        link:"/home"
    },
    {
        title:"Notifications",
        icon:<FavoriteBorderRoundedIcon/>,
        link:"/home"
    },
    {
        title:"Create",
        icon:<AddBoxOutlinedIcon/>,
        link:"/home"
    },
    // {
    //     title:"Profile",
    //     icon:<AccountCircleOutlinedIcon/>,
    //     link:"/home"
    // }
]



