import { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
   const [videos, setVideos]=useState([])
  


   

 useEffect (()=>{
getVideos()
 },[])

const getVideos = async ()=>{
  const res = await fetch(YOUTUBE_API);
  const data = await res.json();
 
  setVideos(data.items)
}

  return (
    <div className='flex flex-wrap '>

    {
      videos?.map((video)=>( 
        <Link to={"/watch?v=" + video.id} key={video.id}>
           <VideoCard  info={video}/>
        </Link>))
      
    }
    </div>
  )
}

export default VideoContainer