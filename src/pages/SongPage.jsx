import React from 'react'
export default function SongPage({songDetails}) {
  return (
    <>
    <div className='w-screen'>
        <div className='w-full flex items-end gap-6 pl-8 pt-12'>
            <img src={songDetails.songImgUrl} alt="none" className='w-48 h-56 shadow-xl shadow-gray-800'/>
            <div className='text-white flex flex-col gap-1'>
                <p className="text-xs font-bold">{songDetails.type}</p>
                <h1 className='text-4xl font-extrabold'>{songDetails.songName}</h1>
                <ul className="flex gap-6">
                    {songDetails.singerName.map((value)=><li className='text-xs font-bold'>{value}</li>)}
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}
