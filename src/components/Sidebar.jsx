import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import { NavLink } from 'react-router-dom'
export default function Sidebar() {
  return (
    <>
    <ul className='flex flex-col gap-8 px-1 justify-start w-36 bg-slate-900 bg-opacity-50 h-screen text-white'>
      <li className='py-4'>
        <img src="./download (1).jpeg" alt="none" className="w-full "/>
      </li>
      <li className='flex items-center'>
        <ul className='flex flex-col w-full gap-1'>
          <NavLink to="/" className='flex px-3 py-2 border-b-2 rounded-md gap-2 items-center'>
            <HomeIcon fontSize="small"/>
            <span className='text-sm font-bold'>Home</span>
          </NavLink>
          <NavLink to="/playing" className='flex px-3 py-2 rounded-md gap-2 items-center border-b-2'>
            <GraphicEqIcon fontSize="small"/>
            <span className='text-sm font-bold'>Playing</span>
          </NavLink>
        </ul>
      </li>
    </ul>
    </>
  )
}
