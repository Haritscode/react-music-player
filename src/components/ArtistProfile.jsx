import React from 'react'

export default function ArtistProfile({imageUrl}) {
  return (
    <>
        <button className='w-28'>
            <img src={imageUrl} alt="none" className='w-28 h-28 rounded-full'/>
        </button>
    </>  
    )
}
