import React, { useEffect, useState } from 'react'
import './SongRow.css'
function SongRow({track,index}){
    return (
        <div className="songRow">
            <p className="index">{index+1}</p>
            <img className="songRow__album"src={track.album.images[0].url} alt=""/>
            <div className="a">
                <h1>{track.name}</h1>
                <p>{track.artists.map(artist=>artist.name).join(', ')} - {track.album.name}</p>
            </div>
        </div>
    )
}

export default SongRow