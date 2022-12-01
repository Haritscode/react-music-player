import React from 'react';
import { useSelector } from 'react-redux';
const Playing = ({imgUrl,songTitle,singer}) => {
    const state=useSelector(state=>state.aulterPlayMusic)
    return (
        <>
            <div className='flex gap-2 items-center w-64 overflow-hidden'>
                <img src={imgUrl} alt="" className={`w-12 h-12 rounded-full ${state?"animate-spin-slow":"animation-spin"} hidden sm:block`} id="img"/>
                <div className='text-white flex flex-col justify-start'>
                    <b className='text-base p-0 h-6 overflow-y-hidden'>{songTitle}</b>
                    <ul className='flex gap-1'>
                        {singer.map((value,count)=>{
                        if(count!=singer.length-1)
                        {
                            return <li className='font-extralight text-xs'>{value}  .</li>
                        }
                        else
                        {
                            return <li className='font-extralight text-xs'>{value}</li>
                        }
                    })}

                    </ul>
                </div>
            </div>   
        </>
    );
}

export default Playing;
