import React,{useState,useEffect} from 'react';
import TopSong from './TopSong';
import axios from 'axios';
import { useDispatch} from 'react-redux';
const TopList = () => {
    const dispatch=useDispatch();
    const [List, setList] = useState([])
    const [playingSongIndex,setPlayingsongIndex]=useState("");
    const showmoreList=()=>{
        let dataItems=List.concat(initialState);
        setList(dataItems);
    }
    const ListData=async()=>{
        const listdata=await axios(`https://shazam-core.p.rapidapi.com/v1/charts/world`,{
            headers:{
                'X-RapidAPI-Key':'5cd532aaa3msh88a40c991cb9ea2p13bec8jsn7a9500b50cdb',
                'X-RapidAPI-Host':'shazam-core.p.rapidapi.com'
            },
        })
        setList(listdata.data)
    }
    useEffect(()=>{
        ListData();
    },[])
    useEffect(() => {
        if(playingSongIndex!=="")
        {
            let artistNames=[];
            List[playingSongIndex-1].artists.map(({alias})=>{
                artistNames.push(alias)
            });
            dispatch({type:"PLAYSONG",payload:{
                trackName:List[playingSongIndex-1].title,
                songUrl:List[playingSongIndex-1].hub.actions[1].uri,
                songimgUrl:List[playingSongIndex-1].share.image,
                index:playingSongIndex,
                singerName:artistNames
            }})
        }
    }, [playingSongIndex]);
    return (
        <div className='hidden lg:flex flex-col gap-8 overflow-auto h-full'>
            <div className='flex justify-between'>
                <b>Top Lists</b>
                <button className='text-xs text-slate-300' onClick={()=>showmoreList()}>See more</button>
            </div>
            <ol className='flex flex-col gap-4 overflow-auto scrollbar-hide h-full'>
                {List.map((data,index=-1)=>{
                    index=index+1;
                return <li><TopSong data={data} index={index} setPlayingsongIndex={setPlayingsongIndex}/></li>
                })}
            </ol>
        </div>
    );
}

export default TopList;
