import React,{useState} from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
export default function Song({song,index}) {
  const [isHovered,setisHovered]=useState(false);
  const dispatch=useDispatch();
  const platTrack=()=>{
    let artistData=[];
    song?.artists?.map(({alias,adamid})=>{
      artistData.push({name:alias,id:adamid})
    });
    dispatch({type:"PLAYSONG",payload:{
      trackName:song.title,
      songUrl:song.hub.actions[1].uri,
      songimgUrl:song.share.image,
      index:"",
      singerData:artistData}})
  }
  const songDetails=()=>{
    let artistData=[];
    song?.artists?.map(({alias,adamid})=>{
      artistData.push({name:alias,id:adamid})
    });
    dispatch({type:"SONGDATA",payload:{
      trackName:song.title,
      songUrl:song.hub.actions[1].uri,
      songimgUrl:song.share.image,
      index:"",
      singerData:artistData,
    }})
  }
  return (
    <>
        <div className='w-44 h-56 lg:w-48 lg:h-60 rounded-md bg-white bg-opacity-10 flex items-center justify-center  text-white relative' onMouseOver={()=>setisHovered(true)} onMouseOut={()=>setisHovered(false)} >
          {isHovered?<button className='absolute z-10' onClick={e=>platTrack(e)}>
          <PlayCircleIcon fontSize="large"/>
          </button>:""}
          <NavLink to="/playlist" className='hover:opacity-60 p-2 gap-5 w-full h-full flex flex-col cursor-pointer' onClick={songDetails}>
            <div>
              <img src={song.share.image} alt="none" className='h-36 w-full rounded-md'/>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='font-semibold text-sm h-5 overflow-hidden'>{song.title}</p>
              <ul className='flex gap-1'>
                    {song?.artists?.map(({alias},count)=>{
                        if(count!=song.artists.length-1)
                        {
                            return <li className='font-extralight text-xs overflow-hidden'>{alias}  .</li>
                        }
                        else
                        {
                            return <li className='font-extralight text-xs'>{alias}</li>
                        }
                    })} 
                </ul>
            </div>
          </NavLink>
        </div>  
    </>
  )
}
