import React,{useRef} from 'react'
import Searchbar from '../components/Searchbar'
import Playlist from '../components/Playlist'
export default function Discover() {
  
  return (
    <>
      <div className='flex overflow-hidden w-full lg:h-screen flex-col gap-6 sm:gap-12 sm:p-0'>
        <div className='w-fit pt-6'>
          <Searchbar/>
        </div>
          <Playlist/>
      </div>
    </>
  )
}
