import aulterPlayMusic from './Playmusic'
import playsong from './PlayingSong';
import selectedDetails from './SongDetail';
import {combineReducers} from '@reduxjs/toolkit';
import userLocation from './useLocation';
export const rootReducer=combineReducers({
    aulterPlayMusic,
    playsong,
    selectedDetails,
    userLocation
})