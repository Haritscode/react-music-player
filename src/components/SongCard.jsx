import React from 'react'

export default function Song() {
  return (
    <>
        <div className='p-2 w-44 h-52 lg:w-48 lg:h-56 rounded-md bg-white bg-opacity-10 flex flex-col gap-5 text-white'>
            <img src="./download.jpeg" alt="none" className='h-48 rounded-md'/>
            <div className='flex flex-col gap-1'>
              <p className='font-semibold text-sm'>I Ain't Worried</p>
              <p className='font-light text-xs'>OneRepublic</p>
            </div>
        </div>  
    </>
  )
}
