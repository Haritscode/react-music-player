import React,{useRef} from 'react'
import {FiSearch} from 'react-icons/fi'
export default function Searchbar() {
  const search = useRef(null);
  const searchbtn=()=>{
    search.current.focus();
  }
  return (
    <>
      <div className='w-20 relative'>
        <button className='absolute top-3 left-0' onClick={searchbtn}>        
          <FiSearch size={12}  color='#716C7E'/>
        </button>
        <input type="text" className='bg-transparent outline-none pl-6 -z-10 px-4 rounded-lg py-2 text-xs text-gray-400' placeholder='search' ref={search} />
      </div>
    </>
  )
}
