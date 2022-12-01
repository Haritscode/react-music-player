import React,{useState,useEffect, useRef} from 'react';
import SongCard from './SongCard';
import { songs } from '../assets/songs';
import axios from 'axios';
import { useSelector } from 'react-redux';
const Playlist = () => {
    const compWidth=useRef() 
    const [listLength,setlistLength]=useState(12);
    const [songData,setSongData]=useState([]);
    const userLocation=useSelector(state=>state.userLocation);
    const songsData=async()=>{
      if(userLocation!==""){
        const data=await axios("https://shazam-core.p.rapidapi.com/v1/charts/country",{
        headers: {
          'X-RapidAPI-Key': '5cd532aaa3msh88a40c991cb9ea2p13bec8jsn7a9500b50cdb',
          'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
        },
        params: {country_code: userLocation}
      });
      setSongData(data.data)
      }
    }
    useEffect(()=>{
      songsData();
    },[userLocation])
    return (
        <>
            <div className='lg:flex h-5/6 justify-between lg:justify-center sm:gap-4' ref={compWidth}>
          <div className='flex flex-col gap-6 lg:w-full overflow-hidden'>
            <b className='text-white'>Discover</b>
            <ul className='flex gap-8 lg:grid grid-cols-3 lg:gap-12 lg:w-full xl:grid-cols-4 w-full overflow-auto justify-items-start scrollbar-hide pb-12'>
              {songData.map((data,index)=><li><SongCard song={data} index={index}/></li>)}
            </ul>
          </div>
        </div>
        </>
    );
}

export default Playlist;
