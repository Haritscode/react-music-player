import React, { useRef } from 'react';
import {VscDebugRestart} from 'react-icons/vsc'
import {BiSkipPrevious,BiSkipNext,BiShuffle} from 'react-icons/bi'
import {BsFillPlayCircleFill,BsPauseCircleFill} from 'react-icons/bs'
import {useSelector } from 'react-redux';
const PlayerControler = ({play}) => {
    const mystate=useSelector(state=>state.aulterPlayMusic);
    return (
        <>
            <div className='flex gap-1 md:gap-6 items-center'>
                <button><VscDebugRestart color='#B33434' fontFamily='xl' size={20}/></button>
                <div className='flex gap-2 lg:gap-6'>
                    <button><BiSkipPrevious size={25} color="white"/></button>
                    <button onClick={play}>{mystate?<BsPauseCircleFill size={25} color="white"/>:<BsFillPlayCircleFill size={25} color="white"/>}</button>
                    <button><BiSkipNext size={25} color="white"/></button>
                </div>
                <button><BiShuffle color="#B33434" size={20}/></button>
            </div>
        </>
    );
}

export default PlayerControler;
