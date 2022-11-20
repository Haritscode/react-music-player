import React,{useState} from 'react'
import Song from './Song'
export default function SongCharts() {
  const [TopCount, setTopCount] = useState([1,2,3,4,5,6,7]);
  return (
    <>
        <div className='text-white flex flex-col gap-6 h-full'>
            <b>Top Charts</b>
            <ul className='flex flex-col gap-2 overflow-auto scrollbar-hide list-inside list-decimal marker:font-bold marker:absolute'>
              <li><Song/></li>
              <li><Song/></li>
              <li><Song/></li>
              <li><Song/></li>
              <li><Song/></li>
              <li><Song/></li>
              <li><Song/></li>
              <li><Song/></li>
              <li><Song/></li>
            </ul>
        </div>
    </>
  )
}
