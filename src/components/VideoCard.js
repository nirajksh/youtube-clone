import React from 'react'

const VideoCard = ({info}) => {
  //console.log(info)


  const {snippet, statistics} = info
  const {channelTitle, thumbnails, title} =snippet
  return (

    <div className='p-2 m-2 w-72 shadow-md'>
      <img className= "rounded-lg" src={thumbnails.medium.url} alt='thumbnails'/>
      <ul>
        <li className='font-bold'>
          {channelTitle}
        </li>
        <li>{title}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard