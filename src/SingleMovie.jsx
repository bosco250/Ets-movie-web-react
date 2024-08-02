import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
function SingleMovie() {
  const[data,setData]=useState([])
  const {id}=useParams()
  // console.log(id)
  useEffect(()=>{
    const fetchMovieDetail= async()=>{
      const response=await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=00763eb21951ce116774ed24beeff3f9`)
      setData(response.data)

    }
    fetchMovieDetail();
  },[])

  return (
    <div className=' bg-black flex p-5 pt-[13vh] h-screen justify-center  '>
    <div className="flex flex-col gap-5 max-w-[800px] w-[500px]">
      <Link to={`/playvid/${data.id}`}>
      <img className='md:w-[400px] h-[400px] hover:blur-[2px] ' 
      src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}  />
      <p className=" text-2xl font-bold hover:cursor-pointer hover:text-blue-500">
        {data.original_title}
      </p>
      </Link>
      {/* <p className="">{data.overview}</p> */}
    </div>
    
    </div>

  )
}

export default SingleMovie
