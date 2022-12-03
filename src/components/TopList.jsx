import React,{useState,useEffect} from 'react';
import TopSong from './TopSong';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';
import { SatelliteAlt } from '@mui/icons-material';
const TopList = () => {
    const [List, setList] = useState([])
    const [showList,setshowList]=useState([]);
    const [Count,setCount]=useState(10);
    const [playingSongIndex,setPlayingsongIndex]=useState("");
    const dispatch=useDispatch();
    const playingSong=useSelector(state=>state.playsong)
    const showmoreList=()=>{
        setCount(prevCount=>prevCount+6);
    }
    const ListData=async()=>{
        const listdata=await axios(`https://shazam-core.p.rapidapi.com/v1/charts/world`,{
            headers:{
                'X-RapidAPI-Key':process.env.REACT_APP_RapidAPI_Key,
                'X-RapidAPI-Host':process.env.REACT_APP_RapidAPI_Host
            },
        })
        setList(listdata.data)
    }
    useEffect(()=>{
        const Data=[];
        if(List!==[])
        {
            List?.map((value,count)=>{
                if(count<Count){
                    Data.push(value);
                }
            })
            setshowList(Data);
        }

    },[List,Count])
    useEffect(()=>{
        ListData();
    },[])
    console.log(List);
    useEffect(() => {
        if(playingSongIndex!=="")
        {
            let artistData=[];
            List[playingSongIndex-1].artists.map(({alias,adamid})=>{
                artistData.push({name:alias,id:adamid})
            });
            dispatch({type:"PLAYSONG",payload:{
                trackName:List[playingSongIndex-1].title,
                songUrl:List[playingSongIndex-1].hub.actions[1].uri,
                songimgUrl:List[playingSongIndex-1].share.image,
                index:playingSongIndex,
                singerData:artistData
            }})
        }
    }, [playingSongIndex]);
    useEffect(()=>{
        if(List.length>0)
        {
            let data=new Set([]);
            List?.map(({artists})=>{
            artists?.map(({alias,adamid})=>{
                data.add({artistId:adamid,artistName:alias});
            })
        })
        dispatch({type:"TOPARTISTS",payload:[...data]})
        }
        },[List])
    return (
        <div className='hidden lg:flex flex-col gap-8 overflow-auto h-full'>
            <div className='flex justify-between'>
                <b>Top Lists</b>
                <button className='text-xs text-slate-300' onClick={()=>showmoreList()}>See more</button>
            </div>
            <ol className='flex flex-col gap-4 overflow-auto scrollbar-hide h-full'>
                {showList.map((data,index=-1)=>{
                    index=index+1;
                return <li key={index}><TopSong data={data} index={index} setPlayingsongIndex={setPlayingsongIndex}/></li>
                })}
            </ol>
        </div>
    );
}

export default TopList;
