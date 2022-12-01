import React,{useState,useRef,useEffect} from 'react';
import Playing from './Playing'
import PlayerControler from './PlayerControler'
import VolumeController from './VolumeController'
import PlayTimer from './PlayTimer';
import moment from 'moment/moment';
import {useSelector,useDispatch } from 'react-redux';
const initalState={
    currentTime:"0:00",
    trackLength:"0:00",
    count:0
}
const Player = () => {
    const data=useSelector(state=>state.playsong);
    const ref_audio=useRef();
    const isPlaying=useSelector(state=>state.aulterPlayMusic);
    const [songData,setsongData]=useState(initalState);
    const dispatch=useDispatch();
    const play=()=>{
        dispatch({type:"ALTERPLAY"})
    }

    const newPlay=(e)=>{
        let trackLength=moment.utc(e.target.duration*1000).format("m:ss")
        if (isPlaying === false) dispatch({type:"ALTERPLAY"});
        setsongData({...songData,trackLength});
    }

    const currentTime=(e)=>{
        let currentTime=moment.utc(e.target.currentTime*1000).format("m:ss");
        let count=songData.count+100/parseInt(e.target.duration);
        if(songData.currentTime!==currentTime){
            setsongData({...songData,currentTime,count})
        }
        if(songData.currentTime===songData.trackLength)
        {
            setsongData({...songData,currentTime:"0:00",count:0})
            dispatch({type:"ALTERPLAY"});
        }
    }
    useEffect(()=>{
        setsongData({...songData,currentTime:"0:00",count:0})
    },[data])
    useEffect(() => {
        if (isPlaying) {
            ref_audio.current.play();
        }
        else ref_audio.current.pause();
    }, [isPlaying])
    return (
        <div className='flex item-center z-10 000000 backdrop-blur-2xl w-screen h-20 rounded-t-xl px-2 md:px-12 justify-between gap-2 md:gap-0'>
            <audio src={data.songUrl} autoPlay={isPlaying} ref={ref_audio} onTimeUpdate={e=>currentTime(e)} onCanPlay={e=>newPlay(e)}></audio>
            <Playing imgUrl={data.songImgUrl} songTitle={data.trackName} singer={data.singerName}/>
            <div className='flex flex-col items-center justify-end w-fit'>
            <PlayerControler play={play}/>
            <PlayTimer songData={songData}/>
            </div>
            <VolumeController/>
        </div>
    );
}

export default Player;
