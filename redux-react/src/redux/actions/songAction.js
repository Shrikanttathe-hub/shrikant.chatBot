import { SELECTED_SONG } from "./actionTypes";


const selectedSong = (song) =>{
    return{
        type: SELECTED_SONG,
        payload: song
    }
}