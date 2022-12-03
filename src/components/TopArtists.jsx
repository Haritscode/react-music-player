import React,{useState,useEffect} from 'react';
import ArtistProfile from './ArtistProfile';
import axios from 'axios';
import { useSelector } from 'react-redux';
const TopArtists = () => {
    const[Artist, setArtist] = useState([]);
    const[showArtist,setShowArtist]=useState(4);
    const topArtists=useSelector(state=>state.TopArtists)
    useEffect(()=>{
        let artistData=[];
        if(topArtists.length>0)
        {
            for(let i=0;i<showArtist;i++)
            {
                artistData.push(topArtists[i].artistId)
            }
            setArtist(artistData);
        }
    },[topArtists,showArtist])
    const moreArtists=()=>{
        setShowArtist(prev=>prev+4)
    }
    return (
        <>
            <div className='flex flex-col gap-6'>
                <div className='flex justify-between'>
                    <b className='text-white'>Top Artists</b>
                    <button onClick={()=>moreArtists()} className='text-xs text-slate-400 '>See more</button>
                </div>
                <ul className='flex overflow-auto gap-8  scrollbar-hide'>
                    {Artist.map((id,i)=><li key={i}><ArtistProfile id={id}/></li>)}
                </ul>
            </div>
        </>
    );
}

export default TopArtists;
