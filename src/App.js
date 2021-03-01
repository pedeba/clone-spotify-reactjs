import React, { useEffect } from 'react'
import './App.css';
import Login from './Components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Components/Player';
import { useDataLayerContext } from './Components/DataLayer';

const spotify = new SpotifyWebApi()

function App() {
  const [{token}, dispatch] = useDataLayerContext()


  useEffect(()=>{
    const hash = getTokenFromUrl()
    window.location.hash = ''
    const _token = hash.access_token
    if(_token){
      dispatch({
        type: 'SET_TOKEN',
        payload: _token
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then(user=>{
        dispatch({
          type: 'SET_USER',
          payload: user
        })
      })
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: 'SET_PLAYLISTS',
          payload: playlists
        })
      })
      spotify.getPlaylist('37i9dQZEVXcKIlyddsNzEC').then((response)=>{
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          payload: response
        })
      })
    }
  },[])
  return (
    <div className="App">
      {token?<Player spotify={spotify}/>:<Login />}
    </div>
  );
}

export default App;
