import React from 'react'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
export default function Song({Listno}) {
  return (
    <>
    <div className='flex flex-row items-center gap-4'>
        <b>{Listno}</b>
        <div className='flex items-center justify-between w-full'>
        <div className='flex gap-3 items-center'>
            <img src="/Despacito-Spanish-2017-500x500.jpg" alt="none" className='w-16 rounded-md'/>
            <div className='flex flex-col'>
                <b className='text-sm'>Despacito</b>
                <p className='font-extralight text-xs'>Louis foncey</p>
            </div>
        </div>
        <div>
            <button>
                <PlayCircleFilledWhiteIcon/>
            </button>
        </div>
        </div>
    </div>
    </>
  )
}
