import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons'
import React from 'react'
import './Body.css'
import { useDataLayerContext } from './DataLayer'
import Header from './Header'
import SongRow from './SongRow'
function Body({spotify}){
    const [{discover_weekly}, dispatch] = useDataLayerContext()
    return (
        <div className='body'>
            <Header spotify={spotify}/>
            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt=""/>
                <div className="body__infoText">
                 <strong>PLAYLIST</strong>   
                 <h2>Discover Week</h2>
                 <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilled className="body__shuffle"/>
                    <Favorite className="coracao" fontSize="large"/>
                    <MoreHoriz/>
                </div>
                {discover_weekly?.tracks.items.map((item,index)=>(
                    <SongRow index={index}track={item.track} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Body