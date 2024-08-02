import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'

const FullMovie = () => {
  const {id}=useParams()
  const [data,setData]=useState([])
  useEffect(()=>{
    const playMovie=async ()=>{
      const response=await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=00763eb21951ce116774ed24beeff3f9`)
    setData(response.data?.results[1])
    }
    playMovie()
  },[])
  const opts={
    height:"400px",
    width:"600px",
    playerVars:{
      autoplay:1,
    }
  }
  return (
    <div className='flex justify-center pt-[14vh] h-screen bg-black'>
      <div className="">
    <YouTube videoId={`${data.key}`} opts={opts}/>
      </div>
      
    </div>
  )
}

export default FullMovie
