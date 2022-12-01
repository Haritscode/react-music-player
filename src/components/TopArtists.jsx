import React,{useState,useEffect} from 'react';
import ArtistProfile from './ArtistProfile';
const initialstate=[
    "20200331-new-music-09.webp",
    "20200331-new-music-09.webp",
    "20200331-new-music-09.webp",
    "20200331-new-music-09.webp"
]
const TopArtists = () => {
    const[Artist, setArtist] = useState([]);
    const moreArtists=()=>{
        let newData=Artist.concat(["top-28-hottest-and-most-popular-solo-singers-under-28 (1).jpg","top-28-hottest-and-most-popular-solo-singers-under-28 (1).jpg","top-28-hottest-and-most-popular-solo-singers-under-28 (1).jpg","top-28-hottest-and-most-popular-solo-singers-under-28 (1).jpg"])
        setArtist(newData);
    }
    useEffect(()=>{
        setArtist(initialstate)
    },[])
    return (
        <>
            <div className='flex flex-col gap-6'>
                <div className='flex justify-between'>
                    <b className='text-white'>Top Artists</b>
                    <button onClick={()=>moreArtists()} className='text-xs text-slate-400 '>See more</button>
                </div>
                <ul className='flex overflow-auto gap-8  scrollbar-hide'>
                    {Artist.map((value,i=0)=><li key={i++}><ArtistProfile imageUrl={value}/></li>)}
                </ul>
            </div>
        </>
    );
}

export default TopArtists;
