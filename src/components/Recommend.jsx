import React from 'react';
import TopArtists from './TopArtists';
import TopList from './TopList';
const Recommend = () => {
    return (
        <>
            <div className='lg:flex sm:flex-col h-screen gap-6 text-white w-full lg:w-[28%] xl:w-1/4 lg:pt-24'>
                <TopList/>
                <TopArtists/>
            </div>
        </>
    );
}

export default Recommend;
