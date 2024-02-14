import React from 'react'

const VideoCards = ({info}) => {
    const {snippet, statistics} = info;
    const {thumbnails,title,channelTitle} = snippet;
    
  return (
    <div className='text-[5px] w-36 h-40 p-2 m-2 rounded-md shadow-lg'>
        <img className='rounded-md ' src={thumbnails.default.url} alt='thumbnail' />
        <ul className=' py-1'>
            <li className='font-bold text-[6px]'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
        </ul>
    </div>
  )
}

export const AdVideoCard = ({info}) => {
  return (
    <div className='p-1 m-1 border-2 border-rose-500 rounded-md'>
      <VideoCards info={info}/>
    </div>
  )
}

export default VideoCards