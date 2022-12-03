import React, { useState } from 'react'
import { BsFillPlayCircleFill, BsHeartFill, BsHeart,BsSuitHeart,BsSuitHeartFill } from 'react-icons/bs'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
export default function SongPage({ songDetails }) {
  const [isListLiked, setisListLiked] = useState(false);
  const [songLiked,setsongLiked]=useState(false);
  return (
    <>
      <div className='w-screen flex flex-col gap-12'>
        <div className='w-full flex items-end gap-6 pl-8 pt-12'>
          <img src={songDetails.songimgUrl} alt="none" className='w-48 h-56 shadow-xl shadow-gray-700' />
          <div className='text-white flex flex-col gap-1'>
            <p className="text-lg font-bold">{ }</p>
            <h1 className='text-6xl font-extrabold'>{songDetails.trackName.split("(")[0]}</h1>
            <ul className="flex gap-1">
              {songDetails?.singerData?.map(({ name }, count) => {
                if (count != songDetails.singerData.length - 1) {
                  return <li className='flex text-base overflow-hidden gap-1 font-semibold'>
                    <button className='hover:underline'>{name}</button>
                    <span className='font-extrabold'>.</span>
                  </li>
                }
                else {
                  return <li className='text-base font-semibold'><button className='hover:underline'>{name}</button></li>
                }
              })}
            </ul>
          </div>
        </div>
        <div className='flex items-center gap-6'>
          <BsFillPlayCircleFill color='#1ED760' fontSize={50} />
          <button onClick={() => setisListLiked(!isListLiked)}>
            {isListLiked ? <BsHeartFill color='#1ED760' fontSize={30} /> : <BsHeart fontSize={30} color="white" />}
          </button>
          <button>
            <BiDotsHorizontalRounded color="white" fontSize={30} />
          </button>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-1'>
            <span className='flex gap-4 font-semibold text-sm text-slate-400'><p>#</p><p>TITLE</p></span>
            <hr color='#282B2C' />
          </div>
          <div className='flex justify-between'>
            <div className='flex items-center text-sm gap-4 text-white'>
              <div>1</div>
              <span className='flex flex-col'>
                <p className='font-bold'>{songDetails.trackName}</p>
                <span className='flex'>
                  {songDetails?.singerData?.map(({ name }, count) => {
                    if (count != songDetails.singerData.length - 1) {
                      return <span className='flex overflow-hidden text-xs font-light'>
                        <button className='hover:underline'>{name}</button>
                        <p className='font-extrabold'>,</p>
                      </span>
                    }
                    else {
                      return <p className='font-light text-xs'>
                        <button className='hover:underline'>
                          {name}
                        </button>
                      </p>
                    }
                  })}
                </span>
              </span>
            </div>
            <div className='flex items-center gap-4 text-slate-300'>
                <button onClick={()=>setsongLiked(!songLiked)}>
                  {
                    songLiked?<BsSuitHeartFill color='#1ED760' fontSize={15}/>:<BsSuitHeart color="white" fontSize={15}/>
                  }

                </button>
                <p className='text-sm font-medium'>6:30</p>
                <button>
                  <BiDotsHorizontalRounded color="white"/>
                </button>
            </div>
           </div>
        </div>
      </div>
    </>
  )
}
 