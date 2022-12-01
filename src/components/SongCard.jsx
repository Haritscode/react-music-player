import React,{useState} from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
export default function Song({song,index}) {
  const [isHovered,setisHovered]=useState(false);
  const dispatch=useDispatch();
  const select=useSelector(state=>state.playsong)
  const platTrack=()=>{
    let artistNames=[];
    song.artists.map(({alias})=>{
      artistNames.push(alias)
    });
    dispatch({type:"PLAYSONG",payload:{
      trackName:song.title,
      songUrl:song.hub.actions[1].uri,
      songimgUrl:song.share.image,
      index:"",
      singerName:artistNames}})
  }
  const songDetails=()=>{
    let artistNames=[];
    song.artists.map(({alias})=>{
      artistNames.push(alias)
    });
    dispatch({type:"SONGDATA",payload:{
      trackName:song.title,
      songUrl:song.hub.actions[1].uri,
      songimgUrl:song.share.image,
      index:"",
      singerName:artistNames}})
  }
  return (
    <>
        <div className='w-44 h-52 lg:w-48 lg:h-56 rounded-md bg-white bg-opacity-10 flex items-center justify-center  text-white relative' onMouseOver={()=>setisHovered(true)} onMouseOut={()=>setisHovered(false)} >
          {isHovered?<button className='absolute z-10' onClick={e=>platTrack(e)}>
          <PlayCircleIcon fontSize="large"/>
          </button>:""}
          <NavLink to="/playlist" className='hover:opacity-60 p-2 gap-5 w-full h-full flex flex-col cursor-pointer' onClick={songDetails}>
            <div>
              <img src={song.share.image} alt="none" className='h-36 w-full rounded-md'/>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='font-semibold text-sm'>{song.title}</p>
              <p className='font-light text-xs'>OneRepublic</p>
            </div>
          </NavLink>
        </div>  
    </>
  )
}
