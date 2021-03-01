import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import { useDataLayerContext } from './DataLayer';

const menuOption = [
    {
        title: 'Home',
        icon: HomeIcon
    },
    {
        title: 'Search',
        icon: SearchIcon
    },
    {
        title: 'Your Library',
        icon: LibraryMusicIcon
    },
]

function Sidebar(){
    const [{playlists}, dispatch] = useDataLayerContext()
    return (
        <div className='sidebar'>
            <img className='sidebar__logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
            {menuOption.map(({title, icon},index)=>(
                <SidebarOption title={title} Icon={icon} key={index}/>
            ))}
            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>
            <div className="lista-play">
                {playlists?.items?.map((playlist, index)=>(
                    <SidebarOption key={index}title={playlist.name}/>
                ))}
            </div>
        </div>
    )
}

export default Sidebar