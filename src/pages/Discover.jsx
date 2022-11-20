import React,{useRef} from 'react'
import Searchbar from '../components/Searchbar'
import SongCard from '../components/SongCard'
import SongCharts from '../components/SongCharts'
import ArtistProfile from '../components/ArtistProfile'
import { useHorizontalScroll } from '../useSideScroll'
export default function Discover() {
  const scrollRefMusic=useHorizontalScroll();
  const scrollRefArtists=useHorizontalScroll();
  return (
    <>
      <div className='flex flex-col gap-12 justify-center w-full p-6'>
        
        <Searchbar/>
        <div className='flex flex-col gap-6 sm:hidden'>
          <b className='text-white'>Discover</b>
          <ul className='flex overflow-auto gap-6 w-full scrollbar-hide' 
          ref={scrollRefMusic}
          >
            <li><SongCard/></li>
            <li><SongCard/></li>
            <li><SongCard/></li>
            <li><SongCard/></li>
            <li><SongCard/></li>
            <li><SongCard/></li>
            <li><SongCard/></li>
            <li><SongCard/></li>
          </ul>
        </div>
        <div className='sm:flex justify-between hidden sm:gap-4'>
        <div className=' flex flex-col gap-6 h-fit max-h-4/6'>
          <b className='text-white'>Discover</b>
          <ul className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-14 w-fit gap-14 overflow-auto h-full scrollbar-hide' 
          >
            <li><SongCard/></li>
            <li><SongCard/></li>
            <li><SongCard/></li>
            <li><SongCard/></li>
            <li><SongCard/></li>
            <li><SongCard/></li>
            <li><SongCard/></li>
            <li><SongCard/></li>
            <li><SongCard/></li>
            <li><SongCard/></li>
            <li><SongCard/></li>
            <li><SongCard/></li>
          </ul>
        </div>
        <div className='w-2/5 lg:w-1/3 xl:w-1/4 h-4/6'>
        <SongCharts/>
        </div>
        </div>
        <div className='flex flex-col gap-6 sm:relative sm:bottom-80 lg:hidden'>
          <b className='text-white'>Top Artists</b>
          <ul className='flex overflow-auto gap-8 w-Screen scrollbar-hide' ref={scrollRefArtists}>
            <li><ArtistProfile/></li>
            <li><ArtistProfile/></li>
            <li><ArtistProfile/></li>
            <li><ArtistProfile/></li>
            <li><ArtistProfile/></li>
          </ul>
        </div>
      </div>
    </>
  )
}
