import React,{useState,useEffect} from 'react'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { useSelector} from 'react-redux';
export default function TopSong({data,setPlayingsongIndex,index}) {
    const [isthisPlaying,setisthisPlaying]=useState(false);
    const playingSongId=useSelector(state=>state.playsong);
    const play=()=>{
        setisthisPlaying(true);
        setPlayingsongIndex(index)
    }
    useEffect(() => {
        if(playingSongId.index==index)
        {
            setisthisPlaying(true);
        }
        else{
            setisthisPlaying(false);
        }
    }, [playingSongId.index]);
    console.log(data);
  return (
    <>
    <div className='flex flex-row items-center gap-4 w-full'>
        <div className='flex items-center justify-between w-full'>
        <div className='flex gap-3 items-center'>
            <img src={data.share.image} alt="none" className='w-16 h-16 rounded-md'/>
            <div className='flex flex-col'>
                <b className='text-xs w-4/5 '>{data.title}</b>
                <ul className='flex gap-1'>
                    {data?.artists?.map(({alias},count)=>{
                        if(count!=data.artists.length-1)
                        {
                            return <li className='font-extralight text-xs'>{alias}  .</li>
                        }
                        else
                        {
                            return <li className='font-extralight text-xs'>{alias}</li>
                        }
                    })} 
                </ul>
            </div>
        </div>
        <div>
            <button onClick={()=>play()}>
                {isthisPlaying?<EqualizerIcon/>:<PlayCircleFilledWhiteIcon/>}
            </button>
        </div>
        </div>
    </div>
    </>
  )
}
