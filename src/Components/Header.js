import { Avatar } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useDataLayerContext } from './DataLayer'
import './Header.css'

function Header(){
    const [{user}, dispatch] = useDataLayerContext()
    return (
        <div className="header">
            <div className="header__left">
                <Search/>
                <input type="text" placeholder="Search for Artists, Songs"/>
            </div>
            <div className="header__rigth">
                <Avatar className="avatar" src={user?.images[0]?.url} alt="userphoto"/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header