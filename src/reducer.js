export const initialState = {
    user:null,
    playlists: [],
    playing: null,
    item: null,
    // token:'BQC69n1QC3VjNsJbC2gbL_XJx4770SPgk01iXvaExsBgWrywgReiwNLmlTiFdDhy10roQX9D9scR4GFsHjXyK0xqPrx2kupBYqzgZkquljczveMynAb-saol_QmjgJXlbISIkH2C45JxmM0ZegkIpJmu2zjJlaU7X1yU3cLyFTPpeCv0'
}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.payload
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.payload
            }  
        default:
            return state
    }
}


export default reducer