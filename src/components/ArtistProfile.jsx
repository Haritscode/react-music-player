import React,{useState,useEffect} from 'react'
import axios from 'axios';
export default function ArtistProfile({id}) {
    const [artistData,setArtistData]=useState();
    const artist=async()=>{
        const data=await axios("https://shazam-core.p.rapidapi.com/v1/artists/details",{
            headers:{
                "X-RapidAPI-Key":process.env.REACT_APP_RapidAPI_Key,
                "X-RapidAPI-Host":process.env.REACT_APP_RapidAPI_Host
            },
            params:{artist_id:id}
        })
        setArtistData(data.data.artists[id].attributes.artwork.url);
    }
    useEffect(()=>{
        artist();
    },[]);
  return (
    <>
        <button className='w-28'>
            <img src={artistData} alt="none" className='w-28 h-28 rounded-full'/>
        </button>
    </>  
    )
}
